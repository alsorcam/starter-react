import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import * as actions from './../../redux/actions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class MyPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Modal extends React.Component {
  onClose(){
    if(this.props.item.onClose){
      this.props.item.onClose();
      this.props.onClose(this.props.item);
    } else {
      this.props.onClose(this.props.item);
    }
  }

  onConfirm(){
    if(this.props.item.onConfirm){
      this.props.item.onConfirm();
      this.props.onClose(this.props.item);
    }
  }

  render() {
    const { content } = this.props.item;
    const { header } = this.props.item;
    
    return (
      // <div className="modal-wrapper">
	    //   <div>
      //     {content}
      //   </div>
      //   <div>
      //     <button className="modal-button" onClick={() => this.onConfirm()}>Confirm</button>
      //     <button className="modal-button" onClick={() => this.onClose()}>Close</button>
      //   </div>
      // </div>
           <Dialog
           open={true}
           onClose={this.onClose()}
           maxWidth="sm"
           fullWidth={true}
           aria-labelledby="alert-dialog-slide-title"
           aria-describedby="alert-dialog-slide-description">
           <DialogTitle id="alert-dialog-slide-title">{header}</DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-slide-description">
               {content}
             </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={this.onClose()} color="secondary">
               Close
             </Button>
             <Button onClick={this.onConfirm()} color="primary">
               Accept
             </Button>
           </DialogActions>
         </Dialog>
    );
  }
}

class Modals extends React.Component {
  render() {
    const modals = this.props.modals.map((item,i) => <MyPortal key={i} ><Modal item={item} onClose={(item) => this.props.dispatch(actions.closeModal(item))}/></MyPortal>)
    return (
      <div className={modals.length>0 ? "modals" : ""}>
        {modals}
      </div>
    );
  }
}
export const ModalContainer = connect(
	function mapStateToProps(state) {
		return {
			modals: state.modals
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			dispatch
		};
	}
)(Modals);