import React from 'react';
import ModalBootstrap from '../shared/components/Modal-Bootstrap';

export default class ModalDialog extends React.Component {

  constructor(props) {
    super(props);
    this.handleBootstrap = this.handleBootstrap.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.acceptModal = this.acceptModal.bind(this);

    this.state = {
      showBootstrap: false
    };
  }

  handleBootstrap() {
    this.setState({ showBootstrap: !this.state.showBootstrap });
  }

  cancelModal() {
    this.setState({ showBootstrap: false });
  }

  acceptModal() {
    this.setState({ showBootstrap: false });
  }

  render() {
    return (
      <div className="demo-section">
        <h2>Modal/Dialog</h2>
        <div className="d-flex">
          <button className="btn btn-sm btn-info" onClick={this.handleBootstrap}>Boostrap</button>
          <ModalBootstrap header="Header" body="Modal body" show={this.state.showBootstrap}
            onCancel={this.cancelModal} onAccept={this.acceptModal} />
        </div>
      </div>
    );
  }
}
