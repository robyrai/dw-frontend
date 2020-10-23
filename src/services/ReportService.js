import axios from 'axios'

const MANUFACTURER_PRODUCT_API_URL='http://localhost:8080/manufacturerProduct';
const CATEGORY_REPORT_API_URL='http://localhost:8080/categoryReport';
const MANUFACTURER_DETAIL_API_URL='http://localhost:8080/manufacturerDetail/';
const LIST_YEARS_SALES_API_URL= 'http://localhost:8080/revenueYears';
const LIST_MONTHS_SALES_API_URL='http://localhost:8080/revenueMonths';

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

    listYears() {
        return axios.get(LIST_YEARS_SALES_API_URL);
    }

    listMonths() {
        return axios.get(LIST_MONTHS_SALES_API_URL);
    }
}

export default new ReportService();
