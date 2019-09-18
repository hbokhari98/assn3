import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state ={
        url:''
      };
  }
componentDidMount() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(results => {
      return results.json();
  }).then(data => this.setState({url: data.url}));
  }


  render() {
  return (
    <div className="App">
      <img src={this.state.url} />
    </div>
  );
  }
}

export default App;
