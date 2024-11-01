<template>
  <v-card class="mx-auto pa-4" max-width="800">
    <v-card-title class="text-h4 mb-4">
      {{ data.companyName }}
    </v-card-title>

    <v-card class="mb-4 pa-4" :color="getScoreColor(data.ZeroTrustScore)">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="text-center">
          <div class="text-h2 white--text">{{ data.ZeroTrustScore }}/100</div>
          <div class="text-h5 white--text mt-2">Overall Zero-Trust Score</div>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
<!--          <v-chip-->
<!--            :color="getRiskCategoryColor(data.riskCategory)"-->
<!--            size="x-large"-->
<!--            class="pa-4"-->
<!--          >-->
<!--            <v-icon start>{{ getRiskCategoryIcon(data.riskCategory) }}</v-icon>-->
<!--            {{ data.riskCategory }}-->
<!--          </v-chip>-->
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mb-4 pa-4">
      <v-card-title>Security Metrics</v-card-title>

      <v-row class="mb-2">
        <v-col cols="12" md="4">Authentication Strength</v-col>
        <v-col cols="12" md="8">
          <v-progress-linear
            :model-value="calculateAuthScore"
            :color="getMetricColor(calculateAuthScore)"
            height="20"
          >
            <template v-slot:default> {{ calculateAuthScore }}% </template>
          </v-progress-linear>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="12" md="4">Data Encryption</v-col>
        <v-col cols="12" md="8">
          <v-progress-linear
            :model-value="calculateEncryptionScore"
            :color="getMetricColor(calculateEncryptionScore)"
            height="20"
          >
            <template v-slot:default>
              {{ calculateEncryptionScore }}%
            </template>
          </v-progress-linear>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="12" md="4">Network Security</v-col>
        <v-col cols="12" md="8">
          <v-progress-linear
            :model-value="calculateNetworkScore"
            :color="getMetricColor(calculateNetworkScore)"
            height="20"
          >
            <template v-slot:default> {{ calculateNetworkScore }}% </template>
          </v-progress-linear>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="12" md="4">Web Security</v-col>
        <v-col cols="12" md="8">
          <v-progress-linear
            :model-value="calculateWebScore"
            :color="getMetricColor(calculateWebScore)"
            height="20"
          >
            <template v-slot:default> {{ calculateWebScore }}% </template>
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mb-4 pa-4">
      <v-card-title>Observable Metrics</v-card-title>

      <v-row class="mb-2">
        <v-col cols="12" md="4">Shannon Entropy Score</v-col>
        <v-col cols="12" md="8">
          <v-progress-linear
            :model-value="(data.observableData.ShannonEntropyScore / 10) * 100"
            :color="getMetricColor(data.observableData.ShannonEntropyScore, 10)"
            height="20"
          >
            <template v-slot:default>
              {{ data.observableData.ShannonEntropyScore }}/10
            </template>
          </v-progress-linear>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon
                  :color="
                    data.observableData.firewallDetected ? 'success' : 'error'
                  "
                >
                  {{
                    data.observableData.firewallDetected
                      ? "mdi-check-circle"
                      : "mdi-close-circle"
                  }}
                </v-icon>
              </template>
              <v-list-item-title>Firewall Status</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <template v-slot:prepend>
                <v-icon
                  :color="
                    data.observableData.DNSsecEnabled ? 'success' : 'error'
                  "
                >
                  {{
                    data.observableData.DNSsecEnabled
                      ? "mdi-check-circle"
                      : "mdi-close-circle"
                  }}
                </v-icon>
              </template>
              <v-list-item-title>DNSSEC Enabled</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="6">
          <v-card-text>
            <strong>TLS Version:</strong> {{ data.observableData.tlsVersion }}
          </v-card-text>

          <v-card-text>
            <strong>Certificate Strength:</strong>
            {{ data.observableData.certificateBitStrength }} bits
          </v-card-text>

          <v-card-text>
            <strong>Open Ports Detected:</strong>
            {{ data.observableData.openPortsDetected }}
          </v-card-text>
        </v-col>
      </v-row>

      <v-card-text>
        <strong>Security Headers Implemented:</strong>
        <v-chip-group>
          <v-chip
            v-for="header in data.observableData.securityHeadersImplemented"
            :key="header"
            color="primary"
            small
          >
            {{ header }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "ZeroTrustWidget",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    calculateAuthScore() {
      const shannonScore =
        (this.data.observableData.ShannonEntropyScore / 10) * 80;
      const dnssecScore = this.data.observableData.DNSsecEnabled ? 20 : 0;
      return Math.round(shannonScore + dnssecScore);
    },

    calculateEncryptionScore() {
      let tlsScore = 0;
      switch (this.data.observableData.tlsVersion) {
        case "1.3":
          tlsScore = 50;
          break;
        case "1.2":
          tlsScore = 40;
          break;
        default:
          tlsScore = 20;
      }

      let certScore = 0;
      if (this.data.observableData.certificateBitStrength >= 2048) {
        certScore = 50;
      } else if (this.data.observableData.certificateBitStrength >= 1024) {
        certScore = 25;
      }

      return tlsScore + certScore;
    },

    calculateNetworkScore() {
      const firewallScore = this.data.observableData.firewallDetected ? 50 : 0;
      const portsScore = Math.max(
        0,
        50 - this.data.observableData.openPortsDetected * 2
      );
      return Math.round(firewallScore + portsScore);
    },

    calculateWebScore() {
      const headers = this.data.observableData.securityHeadersImplemented;
      const scorePerHeader = 100 / 6;
      return Math.round(headers.length * scorePerHeader);
    },
  },
  methods: {
    getScoreColor(score) {
      if (score >= 80) return "success";
      if (score >= 60) return "warning";
      return "error";
    },
    getMetricColor(value, max = 100) {
      const percentage = (value / max) * 100;
      if (percentage >= 80) return "success";
      if (percentage >= 60) return "warning";
      return "error";
    },
    getRiskCategoryColor(category) {
      const categories = {
        "Low Risk": "success",
        "Moderate Risk": "warning",
        "High Risk": "error",
      };
      return categories[category] || "warning";
    },
    getRiskCategoryIcon(category) {
      const icons = {
        "Low Risk": "mdi-shield-check",
        "Moderate Risk": "mdi-shield-alert",
        "High Risk": "mdi-shield-off",
      };
      return icons[category] || "mdi-shield-alert";
    },
  },
};
</script>
