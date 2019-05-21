import React from 'react';
import CustomDialog from '../shared/components/CustomDialog';

export default class Dialog extends React.Component {

  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.acceptModal = this.acceptModal.bind(this);
    this.state = {
      show: false
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  cancelModal() {
    this.setState({ show: false });
  }

  acceptModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="demo-section">
        <h2>Dialog</h2>
        <div className="d-flex">
          <button className="btn btn-sm btn-info" onClick={this.handleModal}>Show</button>
        </div>
        <CustomDialog header="Header" body="Body" show={this.state.show}
          onCancel={this.cancelModal} onAccept={this.acceptModal} />
      </div>
    );
  }
}
