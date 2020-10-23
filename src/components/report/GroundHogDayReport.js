import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class GroundHogDayReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ghdSales: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/groundhogDaySales")
            .then(res => res.json())
            .then(res => this.setState({ ghdSales: res }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">
                    Groundhog Day Sales Report
            </h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Total AC Items Sold</th>
                                <th>AC Units sold per day</th>
                                <th>Total units sold on GHD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ghdSales.map(
                                ghdSale =>
                                    <tr key={ghdSale.year}>
                                        <td>{ghdSale.year}</td>
                                        <td>{ghdSale.annualSale}</td>
                                        <td>{ghdSale.dailyAverage}</td>
                                        <td>{ghdSale.ghdTotal}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <Link to="/reports">Back To Reports</Link>
                </div>
            </div>
        )
    }
}
