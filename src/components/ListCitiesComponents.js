import React from 'react';
import { Link } from 'react-router-dom';
import CityService from '../services/CityService';


class ListCitiesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: []
        };

        this.addHoiday = this.updatePopulation.bind(this);
    }

    updatePopulation() {
        this.props.history.push('/update-population');
    }

    componentDidMount() {
        CityService.listCities().then((response) => {
            this.setState({ cities: response.data })
        });
    }

    render() {
        return (
            <div>
                <h2 className="row">
                    <Link to="/update-population"><button className="btn btn-primary">Update Population</button></Link>
                </h2>
                <h2 className="text-center">Holidays</h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>State</th>
                                <th>Population</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cities.map(
                                    city =>
                                        <tr key={city.cityName}>
                                            <td>{city.cityName}</td>
                                            <td>{city.stateName}</td>
                                            <td>{city.population}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListCitiesComponent
