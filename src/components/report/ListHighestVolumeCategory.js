import React, { Component } from 'react'

export default class ListHighestVolumeCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // queryYear: this.props.queryYear,
            // queryMonth: this.props.queryMonth,
            hvdata: []
        };
    }

    componentDidMount () {
        fetch("http://localhost:8080/revenueByVolumeCategory?month=" + this.props.queryMonth + "&year=" + this.props.queryYear)
            .then(res => res.json())
            .then(res => this.setState({ hvdata: res }))
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                {this.state.hvdata.length > 0 ?
                    <div>
                        <h2 className="text-center">Details from inside</h2>
                        <div className="row">
                            <table className="table table-striped table-boardered">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.hvdata.map(
                                            d =>
                                                <tr key={d.cityName}>
                                                    <td>{d.cityName}</td>
                                                    <td>{d.stateName}</td>
                                                    <td>{d.total}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> : <div> More message month and year</div>
                }
            </div>
        )
    }
}
