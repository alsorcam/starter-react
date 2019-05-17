import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react'

export default class ModalSemanticUI extends React.Component {
  render() {
    return (
      <Modal open={this.props.show} centered={false}>
        <Modal.Header>{this.props.header}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            {this.props.body}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            type='button'
            onClick={this.props.onCancel}
            content='Cancel'
          />
          <Button 
            positive
            type='button'
            onClick={this.props.onAccept}
            content='Confirm'
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

ModalSemanticUI.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
  show: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired
};
