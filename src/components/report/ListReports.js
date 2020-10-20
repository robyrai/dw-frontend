import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListReports extends Component {
    render() {
        return (
            <div>
                    <h2 className="text-center">
                        List of Reports
                </h2>
                <div className="column">
                    <ol className="list-group">
                        <li className="list-group-item"><Link to="/manufacturer-product">Manufacturer's Product Report</Link></li>
                        <li className="list-group-item"><Link to="/category-report">Category Report</Link></li>
                        <li className="list-group-item"><Link to="/reports">Manufacturer's Product Report</Link></li>
                        <li className="list-group-item"><Link to="/reports">Manufacturer's Product Report</Link></li>
                        <li className="list-group-item"><Link to="/reports">Manufacturer's Product Report</Link></li>
                        <li className="list-group-item"><Link to="/reports">Manufacturer's Product Report</Link></li>
                        <li className="list-group-item"><Link to="/reports">Manufacturer's Product Report</Link></li>
                        <li className="list-group-item"><Link to="/reports">Manufacturer's Product Report</Link></li>
                    </ol>
                </div>
            </div>
        )
    }
}
