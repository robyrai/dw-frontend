import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReportService from '../../services/ReportService';


class ListManufacturerProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mgfProds: []
        }
    }

    componentDidMount() {
        ReportService.listManufacturerProduct().then((response) => {
            this.setState({ mgfProds: response.data })
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Manufacturer's Products Report</h1>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Count of Products</td>
                                <td>Average Price</td>
                                <td>Max Price</td>
                                <td>Min Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.mgfProds.map(
                                    mfgProd =>
                                        <tr key={mfgProd.name}>
                                            <td><NavLink to={`/mfg-detail/${mfgProd.name}`}>{mfgProd.name}</NavLink></td>
                                            <td>{mfgProd.count}</td>
                                            <td>{mfgProd.averagePrice}</td>
                                            <td>{mfgProd.maxPrice}</td>
                                            <td>{mfgProd.minPrice}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <Link to="/reports">Back To Reports</Link>
                </div>
            </div>
        )
    }
}

export default ListManufacturerProduct
