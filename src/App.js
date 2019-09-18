import React from 'react';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state ={
        pictures: [],
      };
  }
componentDidMount() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(results => {
      return results.json();
  }).then(data => {
    let pictures = data.results.map((pic) => {
      return(
        <div key={pic.results}>
          <img src={pic.url} />
          </div>
    )
  })
})
}


  render() {
  return (
    <div className="App">
      {this.state.pictures}
    </div>
  );
  }
}

export default App;
