# CLI commands
# add danone registry to your connections
snow connection add  

# here is a sample connection using SSO
[connections.danone_spcs]
account = "danone.eucit_pri"
user = "marcin.smiechowicz@external.danone.com"
host = "danone-eucit-pri.snowflakecomputing.com"
database = "dev_vcp"
schema = "rni_scs_app"
warehouse = "dev_rni_anl_wh"
role = "dev_rni"
authenticator = "externalbrowser"


# Run the below command to log in to image registry
snow spcs image-registry token --connection danone_spcs --format=JSON | docker login danone-eucit-pri.registry.snowflakecomputing.com/dev_vcp/rni_scs_app/rni_img_repo --username 0sessiontoken --password-stdin

# Ping the endpoint to see if registry is reachable
ping danone-eucit-pri.registry.snowflakecomputing.com