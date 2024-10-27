<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <v-container>
        <ZeroTrustWidget :data="zeroTrustData"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ZeroTrustWidget from './components/ZeroTrustWidget.vue'

export default {
  name: 'App',
  components: {
    ZeroTrustWidget
  },
  data() {
    return {
      zeroTrustData: {
        companyName: "FinTechSecure Ltd.",
        ZeroTrustScore: 58.5,
        observableData: {
          ShannonEntropyScore: 7.8,
          firewallDetected: true,
          DNSsecEnabled: true,
          tlsVersion: "1.2",
          certificateBitStrength: 2048,
          securityHeadersImplemented: ["X-XSS-Protection", "X-Frame-Options"],
          openPortsDetected: 12
        },
        riskCategory: "Moderate Risk"
      }
    }
  }
}
</script>