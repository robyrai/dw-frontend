import React from 'react';
import { Link } from 'react-router-dom';
import ReportService from '../../services/ReportService';


class ListCategoryReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cats: []
        }
    }

    componentDidMount() {
        ReportService.listCategoryReport().then((response) => {
            this.setState({ cats: response.data })
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Category Report</h2>
                <div className="row">
                    <table className="table table-striped table-boardered">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Count of Products</td>
                                <td>Unique Manufacturers</td>
                                <td>Average Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cats.map(
                                    cat =>
                                        <tr key={cat.categoryName}>
                                            <td>{cat.categoryName}</td>
                                            <td>{cat.countProduct}</td>
                                            <td>{cat.uniqueMfg}</td>
                                            <td>{cat.avgPrice}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <Link to="/reports">Back To Reports</Link>
            </div>
        )
    }
}

export default ListCategoryReport
