import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false
  }
  handleClick = () => {
    console.log("Clicky McClickerson");
    fetch("https://api.github.com/users/ptrthegr8").then(response => response.json())
    .then(user => {
      console.log(user);
      this.setState({ user: user,
        active: !this.state.active
      })
    })
    
    .catch(err => console.log("fetch error:", err))
  }
  render() {
    return (
      <div className="App">
        <button className="myButton" onClick={this.handleClick}>I handle your clicks, so click me!</button>
        {this.state.active && 
        <div className="myCard">
        <h1>{this.state.user.login}</h1>
        <img src={this.state.user.avatar_url} alt={this.state.user.login} />
        <h2>Profile: <a href={this.state.user.html_url}> {this.state.user.html_url}</a> </h2>
        <h2>Followers: {this.state.user.followers}</h2>
        </div>
        }
      </div>
    );
  }
}

export default App;
