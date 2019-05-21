import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CustomDialog from '../shared/components/CustomDialog';
import DialogActions from '@material-ui/core/DialogActions';

export default class Dialog extends React.Component {
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
    const customActions = (
      <DialogActions>
        <Button onClick={this.cancelModal} color="secondary" variant="outlined">
          Close
        </Button>
        <Button onClick={this.acceptModal} color="primary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    );


    const headerStyles = {
      backgroundColor: '#f50057'
    };

    return (
      <Card style={this.props.styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Dialog</Typography>
          <CardActions>
            <Button size="small" variant="contained" color="secondary" onClick={this.handleSimpleModal}>Simple Dialog</Button>
            <Button size="small" variant="contained" color="secondary" onClick={this.handleCustomActions}>Custom Actions</Button>
            <Button size="small" variant="contained" color="secondary" onClick={this.handleCustomHeader}>Custom Header</Button>
          </CardActions>
        </CardContent>
        <CustomDialog
          header="Simple Dialog Header"
          body="This is the body of a simple dialog."
          show={this.state.showSimple}
          onCancel={this.cancelModal} onAccept={this.acceptModal}/>
        <CustomDialog
          header="Custom Actions Dialog Header"
          body="This is the body of a dialog that has custom actions. These actions below the text are passed as an attributte."
          show={this.state.showCustomActions}
          actions={customActions} />
        <CustomDialog
          header="Custom Header Dialog"
          headerStyles={headerStyles}
          body="This is the body of a dialog that has custom header styles."
          show={this.state.showCustomHeader}
          onCancel={this.cancelModal} onAccept={this.acceptModal}/>
      </Card>
    );
  }
}

Dialog.propTypes = {
  classes: PropTypes.object,
};
