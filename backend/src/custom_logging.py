import logging


def configure_logging(log_level=logging.INFO):
    formatter = logging.Formatter("[%(asctime)s] [%(levelname)s] %(name)s: %(message)s")
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)

    # Root logger config
    logging.basicConfig(
        level=log_level,
        handlers=[console_handler]
    )