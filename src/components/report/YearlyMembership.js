import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class YearlyMembership extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.location.state.year,
            topCities: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/yearMembershipTrend?year=" + this.state.year)
            .then(res => res.json())
            .then(res => this.setState({ topCities: res }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Membership Trend Report: {this.state.year}</h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>City Name</th>
                                <th>State</th>
                                <th>Signup Year</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.topCities.map(
                                    city =>
                                        <tr key={city.city}>
                                            <td>{city.city}</td>
                                            <td>{city.state}</td>
                                            <td>{city.signupYear}</td>
                                            <td>{city.total}</td>
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
