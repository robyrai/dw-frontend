import React, { Component } from 'react'
import moment from 'moment'
import HolidayService from '../services/HolidayService';

export default class AddHolidayComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            name: ''
        }

        this.changeHolidayDateHandler = this.changeHolidayDateHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveHoliday = this.saveHoliday.bind(this);
    }

    changeHolidayDateHandler = (event) => {
        this.setState({date: event.target.value});
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    saveHoliday = (event) => {
        event.preventDefault();
        let holiday = {date: this.state.date, name: this.state.name};
        console.log('hoilday => ' + JSON.stringify(holiday));
        HolidayService.addHoliday(holiday).then(res => {
            this.props.history.push('/holidays');
        });
    }

    cancel() {
        this.props.history.push('/holidays');
    }

    render() {
        return (
            <div>
                <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Date of Holiday: </label>
                                <input type="date" placeholder="Holiday Date" name="date" 
                                className="form-control" value={moment(this.state.date).format("YYYY-MM-DD")}
                                onChange={this.changeHolidayDateHandler} />
                            </div>
                            <div className="form-group">
                            <label>Name of Holiday: </label>
                                <input type="text" placeholder="Name of Hoiday" name="name" 
                                className="form-control" defaultValue={this.state.name}
                                onChange={this.changeNameHandler} />
                            </div>
                            <button className="btn btn-success" onClick={this.saveHoliday}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        )
    }
}
