# Zero-Trust Score Client

## Overview
This client-side application provides a comprehensive interface for visualizing Zero-Trust Security Scores for organizations. Built with Vue.js 3 and Vuetify, it offers an intuitive dashboard for analyzing security metrics and compliance status across different companies.

### Metrics
- **Core Zero-Trust Components**
    - Identity & Access Management
    - Network Security
    - Data Protection
    - Application Security
    - Infrastructure Security

- **Observable Metrics**
    - Firewall Configuration Status
    - DNSSEC Implementation
    - TLS Version & Configuration
    - SSL/TLS Certificate Strength
    - Open Port Analysis
    - Security Headers Implementation
    - MFA Adoption Rate

## Installation

> ⚠️ **Note**: For full functionality, you'll need to run both the client and the [backend server](https://github.com/yourusername/zero-trust-score-server). See the backend setup instructions [here](https://github.com/yourusername/zero-trust-score-server/blob/main/README.md).

1. Clone the repository
```bash
cd part_3_zero_trust_score_widget
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

> 📝 **Note**: If you encounter a Vite-related error, add it as a project dependency:
> ```bash
> npm install vite --save-dev
> ```

The application will be available at `http://localhost:5173`

## API Integration

### Endpoints
```javascript
// Fetch companies list
GET /api/companies

// Fetch company details
GET /api/companies/:id

// Fetch company security metrics
GET /api/companies/:id/metrics

// Fetch historical data
GET /api/companies/:id/history
```

### Example Response
```json
{
  "companyId": "123",
  "name": "Example Corp",
  "zeroTrustScore": 85,
  "metrics": {
    "authenticationStrength": 90,
    "dataEncryption": 85,
    "networkSecurity": 80,
    "webSecurity": 85
  },
  "observableMetrics": {
    "firewallStatus": "ACTIVE",
    "dnssecEnabled": true,
    "tlsVersion": "1.3",
    "certificateStrength": "A+",
    "openPorts": 3
  }
}
```