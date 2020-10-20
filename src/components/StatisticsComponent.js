import React from 'react';
import StatisticsService from "../services/StatisticsService";

class StatisticsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: []
        }
    }

    componentDidMount() {
        StatisticsService.getStatistics().then((response) => {
            this.setState({ stats: response.data })
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Statistics</h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <td>Field</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.stats.map(
                                    stat =>
                                        <tr key={stat.field}>
                                            <td>{stat.field}</td>
                                            <td>{stat.total}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default StatisticsComponent
