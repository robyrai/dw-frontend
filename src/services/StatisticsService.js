import axios from 'axios'

const STATS_API_URL='http://localhost:8080/statistics';

class StatisticsService {
    getStatistics() {
        return axios.get(STATS_API_URL);
    }
}

export default new StatisticsService();
