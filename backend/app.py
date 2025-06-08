import logging
import os
import tempfile

from flask import Flask, jsonify, request
import pandas as pd

from src.config import STAGE_NAME
from src.custom_logging import configure_logging
from src.db_connector import open_session 

configure_logging()
LOGGER = logging.getLogger(__name__)

app = Flask(__name__)

@app.route("/ingest", methods=["POST"])
def ingest_file():
    # Parse input file name from the request
    LOGGER.debug(request)
    data = request.json
    fname = data.get("file_name")
    if isinstance(fname, list):
        file_name = fname[0]
    else:
        file_name = fname
    LOGGER.debug(data)
    LOGGER.debug(file_name)
    if not file_name:
        return jsonify({"error": "file_name is required"}), 400

    # Connect to Snowflake and download the file
    conn = open_session()
    cursor = conn.cursor()

    # Download the file from the stage
    try:
        with tempfile.TemporaryDirectory() as temp_dir:
            # get_sql = f"GET '@{file_name}' file://{temp_dir}"
            # LOGGER.debug(f"GET SQL defined as: {get_sql}")
            # cursor.execute(get_sql)

            # Read the Excel file with pandas
            temp_path = os.path.join(temp_dir, file_name.replace(f"{STAGE_NAME}/", ""))
            xls = pd.ExcelFile(temp_path)
            LOGGER.debug(xls)
            sheet_info = {sheet: len(xls.parse(sheet)) for sheet in xls.sheet_names}
            LOGGER.debug(sheet_info)
    except Exception as e:
        LOGGER.error(e)
        return jsonify(dict())
    finally:
        cursor.close()
        conn.close()

    return jsonify(sheet_info)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
