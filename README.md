# excel_to_snowflake

An application that simplifies uploading and processing Excel files directly into Snowflake tables without manual conversion to JSON or CSV. Built with a Flask backend and React frontend, it runs on Snowpark Container Services for seamless integration with Snowflake.

🚧 **Work in Progress**: Project is in development phase. Please check back later for detailed setup steps, including dependencies, Snowflake configuration, and Snowpark Container Services deployment.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [License](#license)

## Overview
`excel_to_snowflake` enables users to upload Excel files, preview and select sheets, define headers and column data types, and load the data into Snowflake tables with a single click. This eliminates the need for manual file conversion, streamlining data ingestion workflows.

## Features
- **Excel File Upload**: Upload Excel files directly through the web interface.
- **Sheet Preview**: View all sheets in the uploaded file for easy selection.
- **Customizable Parsing**: Define header rows, select columns, and specify data types.
- **Seamless Snowflake Integration**: Load parsed data directly into Snowflake tables.
- **User-Friendly Interface**: Intuitive React-based frontend for smooth user experience.
- **Scalable Deployment**: Runs on Snowpark Container Services for efficient processing.

## Tech Stack
- **Backend**: Flask (Python) for handling file uploads and Snowflake integration.
- **Frontend**: React for dynamic and responsive user interface.
- **Deployment**: Snowpark Container Services for scalable, cloud-native execution.
- **Database**: Snowflake for data storage and querying.

## License
This project is licensed under the MIT License.