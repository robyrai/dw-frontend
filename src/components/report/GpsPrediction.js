import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class GpsPrediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gps: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/gpsPrediction")
            .then(res => res.json())
            .then(res => this.setState({ gps: res }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">
                    Actual vs Predicted Revenue for GPS units
            </h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Retail Price</th>
                                <th>Units Sold</th>
                                <th>Units Sold on Discount</th>
                                <th>Units Sold at Retail Price</th>
                                <th>Actual Revenue</th>
                                <th>Predicted Revenue</th>
                                <th>Difference</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.gps.map(
                                gp =>
                                    <tr key={gp.productId}>
                                        <td>{gp.productId}</td>
                                        <td>{gp.name}</td>
                                        <td>{gp.retailPrice}</td>
                                        <td>{gp.unitsSold}</td>
                                        <td>{gp.unitsSoldOnDisount}</td>
                                        <td>{gp.unitsSoldAtReatilPrice}</td>
                                        <td>{gp.actualRevenue}</td>
                                        <td>{gp.predictedRevenue}</td>
                                        <td>{gp.difference}</td>
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
