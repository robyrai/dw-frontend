import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReportService from '../../services/ReportService';
import MgfMaxDisc from './MgfMaxDisc';

export default class ManufacturerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mfgName: this.props.location.state.mfg,
            mobj: this.props.location.state.mobj,
            mgfDetails: []
        }
    }

    componentDidMount() {
        ReportService.manufacturerDetail(this.state.mfgName).then((response) => {
            this.setState({ mgfDetails: response.data })
        });
    }

    render() {
        const mobj = this.props.location.state.mobj;
        const manu = this.props.location.state.mfg;
        return (
            <div>
                <h2 className="text-center">Manufacturer's Details</h2><br />
                <div>
                    <h3>{manu}</h3>
                    <h3><MgfMaxDisc name={manu} /></h3>
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
                                <tr>
                                    <td>{mobj.name}</td>
                                    <td>{mobj.count}</td>
                                    <td>{mobj.averagePrice}</td>
                                    <td>{mobj.maxPrice}</td>
                                    <td>{mobj.minPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.mgfDetails.map(
                                    mgfDetail =>
                                        <tr key={mgfDetail.productId}>
                                            <td>{mgfDetail.productId}</td>
                                            <td>{mgfDetail.name}</td>
                                            <td>{mgfDetail.category}</td>
                                            <td>{mgfDetail.price}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <Link to="/manufacturer-product">Back To Manufacturer-Product Reports</Link>
                </div>
            </div>
        )
    }
}
