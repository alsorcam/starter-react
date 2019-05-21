import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <Card style={this.props.styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Dialog</Typography>
          <CardActions>
            <Button size="small" variant="contained" color="secondary" onClick={this.handleModal}>Show</Button>
          </CardActions>
        </CardContent>
        <CustomDialog header="Header" body="Body" show={this.state.show}
          onCancel={this.cancelModal} onAccept={this.acceptModal} />
      </Card>
    );
  }
}

Dialog.propTypes = {
  classes: PropTypes.object,
};
