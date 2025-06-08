import os
from dotenv import load_dotenv


if os.getenv("ENVIRONMENT", "dev") == "dev":
    load_dotenv()

# all below ENV variables are populated by Snowflake Snowpark Container Services
# you don't need to set them manually in any way.
SNOWFLAKE_CONFIG = {
    "authenticator": "oauth",
    "host": os.getenv("SNOWFLAKE_HOST"),
    "port": os.getenv("SNOWFLAKE_PORT"),
    "protocol": "https",
    "account": os.getenv("SNOWFLAKE_ACCOUNT"),
    "warehouse": os.getenv("SNOWFLAKE_WAREHOUSE"),
    "database": os.getenv("SNOWFLAKE_DATABASE"),
    "schema": os.getenv("SNOWFLAKE_SCHEMA"),
    "client_session_keep_alive": True
}


STAGE_NAME = "TMP_STAGE"