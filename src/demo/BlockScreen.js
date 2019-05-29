import React from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default class BlockScreen extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBlocking = this.toggleBlocking.bind(this);
    this.handleSecondsChange = this.handleSecondsChange.bind(this);
    this.state = {
      blocking: false,
      seconds: 3
    };
  }

  toggleBlocking() {
    if (!this.state.blocking) {
      this.unblockIn(this.state.seconds);
    }
    this.setState({blocking: !this.state.blocking});
  }

  unblockIn(seconds) {
    this.setState({countdown: seconds});
    if(!seconds) {
      this.setState({blocking: false});
    } else {
      setTimeout(() => this.unblockIn(--seconds), 1000)
    }
  }

  handleSecondsChange(event) {
    this.setState({ seconds: event.target.value });
  }

  render() {
    return (
      <BlockUi tag="div" blocking={this.state.blocking}>
        <Card style={this.props.styles.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Block UI</Typography>
            <CardActions>
            <TextField id="number-seconds" label="Seconds" type="number"
                value={this.state.seconds} onChange={this.handleSecondsChange}
                inputProps={{ min: 1 }}/>
              <Button size="small" variant="contained" color="secondary" onClick={this.toggleBlocking}>
                {this.state.blocking
                ? `Unblocking in ${this.state.countdown} seconds`
                : 'Block'}
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </BlockUi>
    );
  }
}