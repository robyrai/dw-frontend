import axios from 'axios'

const GET_HOLIDAYS_API = "http://localhost:8080/holidays";
const ADD_HOLIDAY_API_BASE_URL = "http://localhost:8080/holidays";

class HolidayService {
    listHolidays() {
        return axios.get(GET_HOLIDAYS_API);
    }
    addHoliday(holiday) {
        return axios.post(ADD_HOLIDAY_API_BASE_URL, holiday);
    }
}

export default new HolidayService();