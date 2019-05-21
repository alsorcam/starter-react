import React from 'react';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';





library.add(faInfo);

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
        <div className="form-row">
          <h2 className="mr-2">Fake Backend</h2>
          <Tooltip title="The mock has to be running" placement="right">
            <FontAwesomeIcon icon="info" className="text-info"/>
          </Tooltip>
        </div>
        <div className="form-row mb-3">
          <button className="btn btn-sm btn-info mr-1" onClick={() => this.simulate()}>Simulate</button>
          <button className="btn btn-sm btn-outline-info" onClick={() => this.clearData()}>Clear</button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.response.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
