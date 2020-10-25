import React, { Component } from 'react'

export default class ListHighestVolumeSearch extends Component {
    years = []
    months = []

    constructor(props) {
        super(props);
        this.state = {
            propQueryMonth: '',
            propQueryYear: '',
            queryYear: '',
            queryMonth: '',
            yrs: [],
            mts: [],
            detailVisible: false,
            hvdata: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/revenueYears")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let yearsFromApi = data.map(year => {
                    return { value: year, display: year }
                });
                this.setState({
                    yrs: [{ value: '', display: '(Select year)' }].concat(yearsFromApi)
                });
            }).catch(error => {
                console.log(error);
            });

        fetch("http://localhost:8080/revenueMonths")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let monthsFromApi = data.map(month => {
                    const mtNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    const mtNamesNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

                    return { value: mtNamesNum[month - 1], display: mtNames[month - 1] }
                });
                this.setState({
                    mts: [{ value: '', display: '(Select month)' }].concat(monthsFromApi)
                });
            }).catch(error => {
                console.log(error);
            });
    }

    moreMount() {
        fetch("http://localhost:8080/revenueByVolumeCategory?month=" + this.state.queryMonth + "&year=" + this.state.queryYear)
            .then(res => res.json())
            .then(res => this.setState({ hvdata: res }))
            .catch(error => {
                console.log(error);
            });
    }

    onMonthChange = (event) => {
        this.setState({ queryMonth: event.target.value });
    }

    onYearChange = (event) => {
        this.setState({ queryYear: event.target.value });
    }

    onSend = (event) => {
        this.setState({ propQueryMonth: this.state.queryMonth });
        this.setState({ propQueryYear: this.state.queryYear });
        this.setState({ detailVisible: true });
        this.moreMount();
    }

    render() {
        return (
            <div>
                <select onChange={this.onYearChange}>
                    {this.state.yrs.map((year) => <option key={year.value} value={year.value}>{year.display}</option>)}
                </select>
                <select onChange={this.onMonthChange}>
                    {this.state.mts.map((mt) => <option key={mt.value} value={mt.value}>{mt.display}</option>)}
                </select>
                <button disabled={this.state.queryMonth < 1 || this.state.queryYear < 1} className="btn btn-success" onClick={this.onSend} > Search</button>
                { this.state.detailVisible ?
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
                            </div> : <div> No transaction during {this.state.queryMonth}/{this.state.queryYear} </div>
                        }
                    </div>
                    : <h3>select month year</h3>
                }
                {console.log(this.state.propQueryMonth)}
            </div>
        )
    }
}
