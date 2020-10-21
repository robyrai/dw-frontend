import React from 'react';
import { Link } from 'react-router-dom';
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
                                <th>Name</th>
                                <th>Count of Products</th>
                                <th>Average Price</th>
                                <th>Max Price</th>
                                <th>Min Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.mgfProds.map(
                                    mfgProd =>
                                        <tr key={mfgProd.name}>
                                            <Link to={{
                                                pathname: `/mfg-detail/${mfgProd.name}`,
                                                state: {
                                                    mfg: mfgProd.name,
                                                    mobj: mfgProd
                                                }
                                            }}>{mfgProd.name}</Link>
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
