import React from 'react';
import HolidayService from '../services/HolidayService';
import { Link } from 'react-router-dom';


class ListHolidaysComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            holidays: []
        }

        this.addHoiday = this.addHoliday.bind(this);
    }

    addHoliday() {
        this.props.history.push('/add-holiday');
    }

    componentDidMount() {
        HolidayService.listHolidays().then((response) => {
            this.setState({ holidays: response.data })
        });
    }

    render() {
        return (
            <div>
                <h2 className="row">
                    <Link to="/add-holiday"><button className="btn btn-primary">Add Holiday</button></Link>
                </h2>
                <h2 className="text-center">Holidays</h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.holidays.map(
                                    holiday =>
                                        <tr key={holiday.date}>
                                            <td>{holiday.date}</td>
                                            <td>{holiday.name}</td>
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

export default ListHolidaysComponent
