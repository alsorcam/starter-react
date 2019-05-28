import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ModalContainer } from '../shared/components/CustomDialog';

import * as actions from './../redux/actions';
import { connect } from 'react-redux';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleSimpleModal = this.handleSimpleModal.bind(this);
    this.handleCustomActions = this.handleCustomActions.bind(this);
    this.handleCustomHeader = this.handleCustomHeader.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.acceptModal = this.acceptModal.bind(this);
    this.state = {
      showSimple: false,
      showCustomActions: false,
      showCustomHeader: false
    };
  }

  handleSimpleModal() {
    this.setState({ showSimple: !this.state.showSimple });
  }

  handleCustomActions() {
    this.setState({ showCustomActions: !this.state.showCustomActions });
  }

  handleCustomHeader() {
    this.setState({ showCustomHeader: !this.state.showCustomHeader });
  }

  cancelModal() {
    this.setState({ showSimple: false, showCustomActions: false, showCustomHeader: false });
  }

  acceptModal() {
    this.setState({ showSimple: false, showCustomActions: false, showCustomHeader: false });
  }

  render() {
    return (
      <Card style={this.props.styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Dialog</Typography>
          <CardActions>
            <Button size="small" variant="contained" color="secondary" onClick={
              () => this.props.dispatch(actions.openModal({
              header: 'Modal header',
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
  classes: PropTypes.object,
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