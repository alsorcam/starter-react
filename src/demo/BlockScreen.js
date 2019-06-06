import React from 'react';

import { connect } from 'react-redux';
import { blockUI, unblockUI, blockUIStore } from '../redux/blockUI.store';
import { Provider } from 'react-redux';
import { BlockUIContainer } from '../shared/components/CustomBlockUI';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class BlockScreen extends React.Component {
  render() {
    const children = (<Typography component="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>);

    return (
      <Provider store={blockUIStore}>
        <Card style={this.props.styles.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Block UI</Typography>
            <BlockUIContainer content={children}></BlockUIContainer>
            <CardActions>
              <Button size="small" variant="contained" color="secondary" onClick={() => this.props.dispatch(blockUI())}>BLOCK</Button>
              <Button size="small" variant="contained" color="secondary" onClick={() => this.props.dispatch(unblockUI())}>UNBLOCK</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Provider>
    );
  }
}

const BlockScreenContainer = connect(
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
  }
)(BlockScreen);
export default BlockScreenContainer;