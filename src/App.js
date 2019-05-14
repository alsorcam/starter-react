import React from 'react';

class App extends React.Component  {
  gotoDemo = () => {
    this.props.history.push('/demo')
  }
  render() {
    return (
      <div id="App" className="full-page container-fluid text-center bg-dark text-white d-flex flex-column align-items-center justify-content-center">
        <h1>Welcome to Starter-React!</h1>
        <button className="btn btn-info" onClick={this.gotoDemo}>Demo</button>
      </div>
    );
  }
}
export default App;
