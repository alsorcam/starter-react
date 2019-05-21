import React from 'react';

import Button from '@material-ui/core/Button';

class App extends React.Component  {
  gotoDemo = () => {
    this.props.history.push('/demo')
  }
  render() {
    return (
      <div id="App" className="full-page container-fluid text-center text-white d-flex flex-column align-items-center justify-content-center">
        <h1>Welcome to Starter-React!</h1>
        <Button size="large" variant="contained" color="secondary" onClick={this.gotoDemo}>Demo</Button>
      </div>
    );
  }
}
export default App;
