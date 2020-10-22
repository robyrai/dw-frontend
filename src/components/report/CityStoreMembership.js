import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CityStoreMembership extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.location.state.city,
            state: this.props.location.state.state,
            year: this.props.location.state.year,
            stores: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/cityMembershipTrend?city=" + this.state.city + "&state=" + this.state.state + "&year=" + this.state.year)
            .then(res => res.json())
            .then(res => this.setState({ stores: res }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Membership Trend Report</h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>Store Id</th>
                                <th>Address</th>
                                <th>City Name</th>
                                <th>Membership Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.stores.map(
                                    store =>
                                        <tr key={store.storeId}>
                                            <td>{store.storeId}</td>
                                            <td>{store.address}</td>
                                            <td>{store.city}</td>
                                            <td>{store.count}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <Link to="/membership-trend">Back To Membership Trend Reports</Link>
                </div>
            </div>
        )
    }
}
