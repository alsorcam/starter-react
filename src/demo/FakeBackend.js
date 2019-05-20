import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default class FakeBackend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };

    this.simulate = this.simulate.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  simulate() {
    axios.get('http://localhost:4000/users')
      .then(response => {
        if (response) {
          this.setState({
            response: response.data
          });
        } else {
          this.clearData();
        }
      }).catch(err => console.log(err));
  }

  clearData() {
    this.setState({ response: [] });
  }

  render() {
    return (
      <div className="demo-section">
        <h2>Fake Backend</h2>
        <div className="form-row mb-3">
          <button className="btn btn-sm btn-info mr-1" onClick={() => this.simulate()}>Simulate</button>
          <button className="btn btn-sm btn-outline-info" onClick={() => this.clearData()}>Clear</button>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.response.map(item => 
            <tr>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
            </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
