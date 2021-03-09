import './App.css';
import React from 'react';
import axios from 'axios';
import Followers from './Followers';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/samplesn08')
      .then(res => {
        this.setState(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Info</h1>
        <div className='container'>
          <div className='mainUser'>
            <img src={this.state.avatar_url} alt='users avatar'></img>
            <div className='info' key={this.state.id}>Name: {this.state.name}<br></br>Location: {this.state.location}</div>
          </div>
          <Followers />
        </div>
      </div>
    );
  }
}

export default App;
