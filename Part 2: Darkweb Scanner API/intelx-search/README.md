# Intelx Search API

## Overview
This API allows users to search Intelx database for specific domain and retrieve relevant data.

## Setup

1. **Clone the repository**
   ```
   cd intelx-search-api
   ```
2. **Install dependencies**
    ```
    npm install
    ```

   3. **Set up environment variables**
   Create a .env file and add the following variable:
       ```
       API_KEY=<PERSONAL-KEY>
       ```
   The API_KEY will send separately
4. **Run the server**
    ```
    npm start
    ```

## Usage
- Endpoint: /search
- Method: GET
- Query Parameter: query (String, required)
Example:
    ```
    curl -X GET "http://localhost:3000/search?query=cocacola.co.il" -H "Content-Type: application/json"
   ```

Example Response
```
[
  {
    "name": "Test",
    "date": "2022-01-01",
    "preview": "preview content",
    "link": "https://intelx.io/?did=system-id"
  }
]
```



