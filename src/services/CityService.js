import axios from 'axios'

const STATS_API_URL='http://localhost:8080/population';

class CityService {
    listCities() {
        return axios.get(STATS_API_URL);
    }
    
    updatePopulation(population) {
        return axios.put(STATS_API_URL + "?cityName=" + population.cityName + "&stateName=" + population.state + "&newPopulation=" + population.population);
    }
}

export default new CityService();
