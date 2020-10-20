import React, { Component } from 'react'
import ReportService from '../../services/ReportService';

export default class ManufacturerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mgfDetails: []
        }
    }
    
    componentDidMount() {
        ReportService.manufacturerDetail(this.props.match.params.name).then((response) => {
            this.setState({ mgfDetails: response.data })
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Manufacturer's Details</h2><br/>
                <div>
                    <h3>BLUE</h3>
                    <h3>Max Disount: 33</h3>
                </div>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <td>Product Id</td>
                                <td>Product Name</td>
                                <td>Category</td>
                                <td>Price</td>
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
            </div>
        )
    }
}
