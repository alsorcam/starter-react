import React from 'react';
import './App.css';

class App extends React.Component  {
  gotoDemo = () => {
    this.props.history.push('/demo')
  }
  render() {
    return (
      <div id="App" className="text-center bg-dark text-white d-flex flex-column align-items-center justify-content-center">
        <p>Welcome to Starter-React!</p>
        <button className="btn btn-info" onClick={this.gotoDemo}>Demo</button>
      </div>
    );
  }
}
export default App;
