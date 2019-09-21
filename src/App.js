import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state ={
        url:'',
        title: '',
        data:'',
        copyright:'',
        date:''
      };
  }
componentDidMount() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(results => {
      return results.json();
  }).then(data => this.setState({
    url: data.url,
    title: data.title,
    data: data.explanation,
    copyright: data.copyright,
    date: data.date
  }));
  }


  render() {
  return (
    <div className="App">
      <h1>{this.state.title}</h1>
      <p><strong>By:</strong> {this.state.copyright}</p>
      <p><strong>Date:</strong> {this.state.date}</p>
      <img className='resize' src={this.state.url} />
      <p>{this.state.data}</p>
    </div>
  );
  }
}

export default App;
