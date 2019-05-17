import React from 'react';
import ModalBootstrap from '../shared/components/Modal-Bootstrap';
import ModalSemanticUI from '../shared/components/Modal-SemanticUI';
import DialogMaterialUI from '../shared/components/Dialog-MaterialUI';

export default class ModalDialog extends React.Component {

  constructor(props) {
    super(props);
    this.handleBootstrap = this.handleBootstrap.bind(this);
    this.handleSemanticUI = this.handleSemanticUI.bind(this);
    this.handleMaterialUI = this.handleMaterialUI.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.acceptModal = this.acceptModal.bind(this);

    this.state = {
      showBootstrap: false,
      showSemanticUI: false,
      showMaterialUI: false
    };
  }

  handleBootstrap() {
    this.setState({ showBootstrap: !this.state.showBootstrap });
  }

  handleSemanticUI() {
    this.setState({ showSemanticUI: !this.state.showSemanticUI });
  }

  handleMaterialUI() {
    this.setState({ showMaterialUI: !this.state.showMaterialUI });
  }

  cancelModal() {
    this.setState({ showBootstrap: false, showSemanticUI: false, showMaterialUI: false });
  }

  acceptModal() {
    this.setState({ showBootstrap: false, showSemanticUI: false, showMaterialUI: false });
  }

  render() {
    return (
      <div className="demo-section">
        <h2>Modal/Dialog</h2>
        <div className="d-flex">
          <button className="btn btn-sm btn-info mr-1" onClick={this.handleBootstrap}>Boostrap</button>
          <button className="btn btn-sm btn-info mr-1" onClick={this.handleSemanticUI}>Semantic UI</button>
          <button className="btn btn-sm btn-info" onClick={this.handleMaterialUI}>Material UI</button>
        </div>
        <ModalBootstrap header="Bootstrap Header" body="Bootstrap Modal body" show={this.state.showBootstrap}
          onCancel={this.cancelModal} onAccept={this.acceptModal} />
        <ModalSemanticUI header="Semantic UI Header" body="Semantic UI Modal body" show={this.state.showSemanticUI}
          onCancel={this.cancelModal} onAccept={this.acceptModal} />
        <DialogMaterialUI header="Material UI Header" body="Material UI Modal body" show={this.state.showMaterialUI}
          onCancel={this.cancelModal} onAccept={this.acceptModal} />
      </div>
    );
  }
}
