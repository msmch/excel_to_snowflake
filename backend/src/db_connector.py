from snowflake.connector import connect, SnowflakeConnection
from .config import SNOWFLAKE_CONFIG


def read_session_token(path: str = "/snowflake/session/token") -> bytes:
    with open(path,"r") as f:
        token = f.read()
    return token

def build_config_dict() -> dict:
    config = SNOWFLAKE_CONFIG
    config["token"] = read_session_token()
    return config

def open_session() -> SnowflakeConnection:
    return connect(**build_config_dict())