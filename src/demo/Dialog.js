import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ModalContainer } from '../shared/components/CustomModal';

import * as actions from './../redux/actions';
import { connect } from 'react-redux';

class Dialog extends React.Component {
  render() {
    return (
      <Card style={this.props.styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Dialog</Typography>
          <CardActions>
            <Button size="small" variant="contained" color="secondary" onClick={
              () => this.props.dispatch(actions.openModal({
              header: 'Custom Modal Header',
              content: <div>Custom Modal Content</div>
            }))}>Redux Modal</Button>
          </CardActions>
        </CardContent>
        <ModalContainer />
      </Card>
    );
  }
}

Dialog.propTypes = {
  classes: PropTypes.object
};

const DialogContainer = connect(
  null,
	function mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
	}
)(Dialog);
export default DialogContainer;