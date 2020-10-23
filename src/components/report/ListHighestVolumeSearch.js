import React, { Component } from 'react'
import ListHighestVolumeCategory from './ListHighestVolumeCategory';

export default class ListHighestVolumeSearch extends Component {
    years = []
    months = []

    constructor(props) {
        super(props);
        this.state = {
            queryYear: '',
            queryMonth: '',
            yrs: [],
            mts: [],
            reset: false,
            detailVisible: false
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

    onMonthChange = (event) => {
        this.setState({ queryMonth: event.target.value });
    }

    onModify = (event) => {
        this.setState({ queryMonth: event.target.value });
    }

    onYearChange = (event) => {
        this.setState({ queryYear: event.target.value });
    }

    onSend = (event) => {
        this.setState({ detailVisible: true });
        this.setState({ reset: true });
    }

    onReset = (event) => {
        this.setState({ detailVisible: false });
        this.setState({ reset: false });
        this.setState({ queryYear: '' });
        this.setState({ queryMonth: '' });
    }

    cancel() {
        this.props.history.push('/reports');
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
                {this.state.reset ?
                    <button disabled={this.state.queryMonth < 1 || this.state.queryYear < 1} className="btn btn-error" onClick={this.onReset}>Reset</button> :
                    <button disabled={this.state.queryMonth < 1 || this.state.queryYear < 1} className="btn btn-success" onClick={this.onSend} onChange={this.onModify}>Search</button>
                }
                { this.state.detailVisible ?
                    <ListHighestVolumeCategory queryMonth={this.state.queryMonth} queryYear={this.state.queryYear} />
                    : <h3>select month year</h3>
                }
            </div>
        )
    }
}
