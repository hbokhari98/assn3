import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state ={
        url:'',
        title: ''
      };
  }
componentDidMount() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(results => {
      return results.json();
  }).then(data => this.setState({
    url: data.url,
    title: data.title
  }));
  }


  render() {
  return (
    <div className="App">
      <h1>{this.state.title}</h1>
      <img src={this.state.url} />
    </div>
  );
  }
}

export default App;
