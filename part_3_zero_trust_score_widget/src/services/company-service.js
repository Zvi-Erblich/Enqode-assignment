import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/data";

const CompanyService = {
  async fetchCompanyList() {
    try {
      const response = await axios.get(`${API_BASE_URL}/company-names`);
      return response.data;
    } catch (error) {
      console.error("Error fetching company list:", error);
      throw error;
    }
  },

  async fetchCompanyData(companyId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/${companyId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching data for company ${companyId}:`, error);
      throw error;
    }
  },
};

export default CompanyService;
