import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MembershipTrend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mtList: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/membershipTrend")
            .then(res => res.json())
            .then(res => this.setState({ mtList: res }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Membership Trend Report</h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>City Name</th>
                                <th>Year</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.mtList.map(
                                    mt =>
                                        <tr key={mt.city}>
                                            <td>
                                                {mt.multiple ?
                                                    (
                                                        <Link to={{
                                                            pathname: `/cityStoreMembershipTrend?city=${mt.city}&state=${mt.state}&year=${mt.year}`,
                                                            state: {
                                                                city: mt.city,
                                                                state: mt.state,
                                                                year: mt.year
                                                            }
                                                        }}>
                                                            <div>{mt.city}</div>
                                                        </Link>
                                                    ) : (<div>{mt.city}</div>)
                                                }
                                            </td>
                                            <td>{mt.year}</td>
                                            <td>
                                                <Link to={{
                                                    pathname: `/yearMembershipTrend?year=${mt.year}`,
                                                    state: {
                                                        year: mt.year
                                                    }
                                                }}>
                                                    {mt.total}
                                                </Link>
                                            </td>
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
