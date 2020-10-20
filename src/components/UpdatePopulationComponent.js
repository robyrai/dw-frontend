import React, { Component } from 'react'
import CityService from '../services/CityService';

export default class UpdatePopulationComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: '',
            state: '',
            population: 0
        }
        this.changeCityNameHandler = this.changeCityNameHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changePopulationHandler = this.changePopulationHandler.bind(this);
        this.updatePopulation = this.updatePopulation.bind(this);
    }

    changeCityNameHandler = (event) => {
        this.setState({ cityName: event.target.value });
    }

    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });
    }

    changePopulationHandler = (event) => {
        this.setState({ population: event.target.value });
    }

    updatePopulation = (event) => {
        event.preventDefault();
        let population = { cityName: this.state.cityName, state: this.state.state, population: this.state.population };
        console.log('population => ' + JSON.stringify(population));
        CityService.updatePopulation(population).then(res => {
            this.props.history.push('/population');
        });
    }

    cancel() {
        this.props.history.push('/population');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>City: </label>
                                    <input placeholder="city name" name="cityName"
                                        className="form-control" value={this.state.cityName}
                                        onChange={this.changeCityNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>State: </label>
                                    <input placeholder="state" name="state"
                                        className="form-control" value={this.state.state}
                                        onChange={this.changeStateHandler} />
                                </div>
                                <div className="form-group">
                                    <label>City: </label>
                                    <input placeholder="population" name="population"
                                        className="form-control" value={this.state.population}
                                        onChange={this.changePopulationHandler} />
                                </div>
                                <button className="btn btn-success" onClick={this.updatePopulation}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
