import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class ModalBootstrap extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onCancel}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.props.onAccept}>
              Accept
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

ModalBootstrap.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
  show: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired
};
