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
                        <li className="list-group-item"><Link to="/gps-predicition">Actual vs Predicted Revenue for GPS Units Report</Link></li>
                        <li className="list-group-item"><Link to="/store-revenue-by-state-by-year">Store Revenue by Year by State Report</Link></li>
                        <li className="list-group-item"><Link to="/groundhog-day-report">A/C on Groundhog Day Report</Link></li>
                        <li className="list-group-item"><Link to="/highest-volume-category">State with Highest Volume for Each Cateogry Report</Link></li>
                        <li className="list-group-item"><Link to="/revenue-by-population">Revenue by Population Report</Link></li>
                        <li className="list-group-item"><Link to="/membership-trend">Membership Trend Report</Link></li>
                    </ol>
                </div>
            </div>
        )
    }
}
