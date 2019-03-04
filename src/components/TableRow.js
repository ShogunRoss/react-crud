import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class TableRow extends Component {
    constructor(props) {
        console.log('props',props);
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.get(`http://localhost:4000/business/delete/${this.props.obj._id}`)
            .then(res => {
                console.log('Deleted');
                this.props.delete(this.props.index);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.personName}
                </td>
                <td>
                    {this.props.obj.businessName}
                </td>
                <td>
                    {this.props.obj.businessGstNumber}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

