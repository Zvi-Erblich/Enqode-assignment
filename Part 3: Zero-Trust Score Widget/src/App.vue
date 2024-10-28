<template>
  <v-app>
    <v-main>
      <v-container>
        <CompanyList @company-selected="updateSelectedCompany" />

        <v-spacer class="my-4"></v-spacer>

        <ZeroTrustWidget :data="zeroTrustData" v-if="zeroTrustData" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CompanyList from "./components/CompanyList.vue";
import ZeroTrustWidget from "./components/ZeroTrustWidget.vue";

export default {
  name: "App",
  components: {
    ZeroTrustWidget,
    CompanyList,
  },
  data() {
    return {
      zeroTrustData: null,
    };
  },
  methods: {
    updateSelectedCompany(companyData) {
      this.zeroTrustData = companyData;
    },
  },
};
</script>

<style scoped>
.v-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
