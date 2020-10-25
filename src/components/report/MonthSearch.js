import React, { Component } from 'react'

export default class MonthSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendProp: "",
            queryMonth: "",
            months: ["Jan", "Feb", "Mar", "Apr"],
            detailVisible: false
        };
    }

    onMonthChange = (event) => {
        this.setState({ queryMonth: event.target.value });
    };

    onSend = (event) => {
        this.setState({sendProp: this.state.queryMonth})
        this.setState({ detailVisible: true });
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <select onChange={this.onMonthChange}>
                    {this.state.months.map((mt) => (
                        <option key={mt} value={mt}>
                            {mt}
                        </option>
                    ))}
                </select>
                <button onClick={this.onSend}>Search</button>
                {this.state.detailVisible ? (
                    <ShowResult sendProp={this.state.sendProp} />
                ) : (
                        <h3>select month</h3>
                    )}
            </div>
        );
    }
}

function ShowResult(props) {
    return (
        <p>{props.sendProp}</p>
    );
}