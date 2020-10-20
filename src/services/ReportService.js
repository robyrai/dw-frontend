import axios from 'axios'

const MANUFACTURER_PRODUCT_API_URL='http://localhost:8080/manufacturerProduct';
const CATEGORY_REPORT_API_URL='http://localhost:8080/categoryReport';
const MANUFACTURER_DETAIL_API_URL='http://localhost:8080/manufacturerDetail/';

class ReportService {
    listManufacturerProduct() {
        return axios.get(MANUFACTURER_PRODUCT_API_URL);
    }

    manufacturerDetail(name) {
        return axios.get(MANUFACTURER_DETAIL_API_URL + name);
    }

    listCategoryReport() {
        return axios.get(CATEGORY_REPORT_API_URL);
    }
}

export default new ReportService();
