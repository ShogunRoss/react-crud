import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      personName: '',
      businessName: '',
      businessGstNumber: ''
    }
  }

  onChangePersonName(e) {
    this.setState({
      personName: e.target.value
    });
  }

  onChangeBusinessName(e) {
    this.setState({
      businessName: e.target.value
    });
  }

  onChangeGstNumber(e) {
    this.setState({
      businessGstNumber: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { personName, businessName, businessGstNumber } = this.state;
    const obj = {
      personName: personName,
      businessName: businessName,
      businessGstNumber: businessGstNumber
    }

    axios.post('http://localhost:4000/business/add', obj)
      .then(res => console.log(res.data));

    this.setState({
      personName: '',
      businessName: '',
      businessGstNumber: ''
    })
  }

  render() {
    const { personName, businessName, businessGstNumber } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add new Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Person Name: </label>
            <input type="text" className="form-control" value={personName} onChange={this.onChangePersonName}/>
          </div>
          <div className="form-group">
            <label>Add Business Name: </label>
            <input type="text" className="form-control" value={businessName} onChange={this.onChangeBusinessName}/>
          </div>
          <div className="form-group" value={businessGstNumber} onChange={this.onChangeGstNumber}>
            <label>Add GST Number: </label>
            <input type="text" className="form-control" value={businessGstNumber} onChange={this.onChangeGstNumber}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Register Business" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}