import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class StoreRevenueByStateSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryState: '',
            sentQueryState: '',
            states: [],
            revenues: [],
            detailVisible: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/states")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let statesFromApi = data.map(state => {
                    return { value: state, display: state }
                });
                this.setState({
                    states: [{ value: '', display: '(Select state)' }].concat(statesFromApi)
                });
            }).catch(error => {
                console.log(error);
            });
    }

    onStateChange = (event) => {
        this.setState({ queryState: event.target.value });
    }

    onSend = (event) => {
        this.setState({ sentQueryState: this.state.queryState })
        this.setState({ detailVisible: true });
        this.onResubmit();
    }

    onResubmit() {
        this.setState( {revenues: []} );
        console.log("fetching state: " + this.state.sentQueryState);
        fetch("http://localhost:8080/storeRevenueByYearByStore?stateName=" + this.state.sentQueryState)
            .then(res => res.json())
            .then(res => this.setState({ revenues: res }));
        console.log("this is the values: " + this.state.revenues)
    }

    render() {
        return (
            <div>
                <select onChange={this.onStateChange}>
                    {this.state.states.map((state) => <option key={state.value} value={state.value} >{state.display}</option>)}
                </select>
                <button disabled={this.state.sentQueryState < 1} className="btn btn-success" onClick={this.onSend} >Search</button>
                { this.state.detailVisible ?
                    <div>
                        <h2 className="text-center">
                            {this.state.queryState} State's Stores' Revenue by Year by Store Report
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
                    : <h3>select state</h3>
                }
                <div className="text-center">
                    <Link to="/reports">Back To Reports</Link>
                </div>
            </div>
        )
    }
}
