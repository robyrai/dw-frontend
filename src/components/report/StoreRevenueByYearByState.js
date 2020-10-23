import React, { Component } from 'react'

export default class StoreRevenueByYearByState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryState: this.props.queryState,
            revenues: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/storeRevenueByYearByStore?stateName=" + this.state.queryState)
            .then(res => res.json())
            .then(res => this.setState({ revenues: res }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">
                    Store Revenue by Year by Store Report
            </h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>Store ID</th>
                                <th>Store Address</th>
                                <th>City</th>
                                <th>Sales Year</th>
                                <th>Total Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.revenues.map(
                                revenue =>
                                    <tr key={revenue.storeId}>
                                        <td>{revenue.storeId}</td>
                                        <td>{revenue.address}</td>
                                        <td>{revenue.city}</td>
                                        <td>{revenue.year}</td>
                                        <td>{revenue.revenue}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
