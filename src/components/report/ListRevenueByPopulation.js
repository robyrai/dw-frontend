import React from 'react';
import { Link } from 'react-router-dom';


export default class ListRevenueByPopulation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rbps: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/revenueByPopulation")
            .then(res => res.json())
            .then(res => this.setState({ rbps: res }));
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Revenue by Population Report</h1>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>Population Cateogry</th>
                                <th>Transaction Year</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rbps.map(
                                    rbp =>
                                        <tr key={rbp.populationCategory}>
                                            <td>{rbp.populationCategory}</td>
                                            <td>{rbp.txnYear}</td>
                                            <td>{rbp.revenue}</td>
                                        </tr>
                                )
                            }
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

