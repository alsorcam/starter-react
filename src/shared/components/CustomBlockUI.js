import React from 'react';

import { connect } from 'react-redux';
import ReduxBlockUi from 'react-block-ui/redux';
import 'react-block-ui/style.css';

class BlockUI extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <ReduxBlockUi tag="div" block={this.props.blocking} unblock={!this.props.blocking}>
       { content }
      </ReduxBlockUi>
    );
  }
}

export const BlockUIContainer = connect(
	function mapStateToProps(state) {
		return {
			block: state.block
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			dispatch
		};
	}
)(BlockUI);