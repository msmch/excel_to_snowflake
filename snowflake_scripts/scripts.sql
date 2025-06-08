-- create service after image push
-- drop service sensobox_ingestion;
create service excel_to_snowflake_backend
in compute pool dev_rni_com_pool 
from specification $$
spec:
  container:
  - name: excel-to-snowflake-backend
    image: danone-eucit-pri.registry.snowflakecomputing.com/dev_vcp/rni_scs_app/rni_img_repo/excel_to_snowflake_backend
    env:
      disable_auth: true
  endpoint:
  - name: excel-to-snowflake-backend
    port: 5000
    public: false
$$
min_instances=1 
max_instances=1;

-- service details
desc service excel_to_snowflake_backend;
show endpoints in service excel_to_snowflake_backend;

-- logs can be accessed like so
select system$get_service_logs('excel_to_snowflake_backend', 0, 'excel_to_snowflake_backend');
