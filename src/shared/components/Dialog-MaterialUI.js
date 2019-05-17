import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class DialogMaterialUI extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          open={this.props.show}
          keepMounted
          onClose={this.props.onCancel}
          maxWidth="sm"
          fullWidth={true}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="alert-dialog-slide-title">
            {this.props.header}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.props.body}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onCancel} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.props.onAccept} color="primary">
              Accept
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogMaterialUI.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
  show: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired
};
