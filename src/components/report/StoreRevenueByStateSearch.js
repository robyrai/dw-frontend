import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StoreRevenueByYearByState from './StoreRevenueByYearByState';

export default class StoreRevenueByStateSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryState: '',
            states: [],
            reset: false,
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

    onModify = (event) => {
        this.setState({ queryMonth: event.target.value });
    }

    onStateChange = (event) => {
        this.setState({ queryState: event.target.value });
    }

    onSend = (event) => {
        this.setState({ detailVisible: true });
        this.setState({ reset: true });
    }

    onReset = (event) => {
        this.setState({ detailVisible: false });
        this.setState({ reset: false });
        this.setState({ queryState: '' });
    }

    cancel() {
        this.props.history.push('/reports');
    }

    render() {
        return (
            <div>
                <select onChange={this.onStateChange}>
                    {this.state.states.map((state) => <option key={state.value} value={state.value}>{state.display}</option>)}
                </select>
                {this.state.reset ?
                    <button disabled={ this.state.queryState < 1 } className="btn btn-error" onClick={this.onReset}>Reset</button> :
                    <button disabled={ this.state.queryState < 1 } className="btn btn-success" onClick={this.onSend} onChange={this.onModify}>Search</button>
                }
                { this.state.detailVisible ?
                    <StoreRevenueByYearByState queryState={this.state.queryState} />
                    : <h3>select state</h3>
                }
                <div className="text-center">
                    <Link to="/reports">Back To Reports</Link>
                </div>
            </div>
        )
    }
}
