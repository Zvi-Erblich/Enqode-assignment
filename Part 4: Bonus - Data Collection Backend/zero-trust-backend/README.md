# Zero-Trust Score Backend

## Overview
A backend service for storing and retrieving Zero-Trust Score data.

## Setup

1. **Clone the repository**
   ```
   cd zero-trust-backend
   ```

2. **Install dependencies**
    ```
    npm install
    ```
3. **Run the server**
    ```
    npm start
    ```
## API Endpoints
1. **Submit Data**
- URL: /api/data/submit
- Method: POST
- Payload:
```
    {
    "averageShannonEntropyScore": 7.8,
    "firewallDetected": true,
    "DNSsecEnabled": true,
    "tlsVersion": "1.2",
    "certificateBitStrength": 2048,
    "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
    "openPortsDetected": 12
    }
```
Example Request:

```
curl -X POST http://localhost:3000/api/data/submit -H "Content-Type: application/json" -d '{
        "averageShannonEntropyScore": 7.8,
        "firewallDetected": true,
        "DNSsecEnabled": true,
        "tlsVersion": "1.2",
        "certificateBitStrength": 2048,
        "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
        "openPortsDetected": 12
        }'
```      

2. **Retrieve Data**
- URL: /api/data/retrieve**
- Method: GET
Example Request:
```
curl -X GET http://localhost:3000/api/data/retrieve
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