import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
      <Card style={this.props.styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Fake Backend</Typography>
          <Typography component="span">The mock has to be running</Typography>
        <CardActions>
          <Button size="small" variant="contained" color="secondary" onClick={this.simulate}>Simulate</Button>
          <Button size="small" variant="outlined" color="secondary" onClick={this.clearData}>Clear</Button>
        </CardActions>
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
        </CardContent>
      </Card>
    );
  }
}
