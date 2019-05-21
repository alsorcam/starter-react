import React from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

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
          <div class="demo-section">
            <h2>Block UI</h2>
            <label className="input-label d-flex align-items-baseline">
              Seconds
              <input type="number" className="form-control form-control-sm ml-3 w-auto" value={this.state.seconds} onChange={this.handleSecondsChange} />
            </label>
            <button className="btn btn-info btn-sm" onClick={this.toggleBlocking}>
              {this.state.blocking
                ? `Unblocking in ${this.state.countdown} seconds`
                : 'Trigger block'}
            </button>
          </div>
        </BlockUi>
    );
  }
}