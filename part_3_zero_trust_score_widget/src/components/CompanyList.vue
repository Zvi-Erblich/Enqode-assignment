<template>
  <v-card class="mx-auto pa-4" max-width="800">
    <v-card-title>Company List</v-card-title>
    <v-row v-if="companies">
      <v-col
        v-for="company in companies"
        :key="company.id"
        cols="auto"
        class="company-col"
        @click="selectCompany(company.id)"
      >
        <v-chip color="primary" class="ma-2" label>
          {{ company.companyName }}
        </v-chip>
      </v-col>
    </v-row>
    <v-card-text v-if="!companies.length" class="text-center">
      <v-alert type="info" border="left" color="info" elevation="2">
        No companies available at the moment. Please add companies via api -
        http//:localhost:3000/api/data/submit, for more details check out the
        readme file.
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
import CompanyService from "../services/company-service";

export default {
  name: "CompanyList",
  data() {
    return {
      companies: [],
    };
  },
  async created() {
    await this.getCompanyList();
  },
  methods: {
    async getCompanyList() {
      try {
        const companyList = await CompanyService.fetchCompanyList();
        this.companies = companyList;
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    },

    async selectCompany(companyId) {
      try {
        const companyData = await CompanyService.fetchCompanyData(companyId);
        this.$emit("company-selected", companyData);
      } catch (error) {
        console.error(`Error fetching data for company ${companyId}:`, error);
      }
    },
  },
};
</script>

<style scoped>
.company-col {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>
