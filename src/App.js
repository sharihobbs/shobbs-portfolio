import React, { Component } from 'react';
import Bio from './components/bio';
import Projects from './components/projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="image" src="https://user-images.githubusercontent.com/29738609/40740894-d8efbe22-63fe-11e8-86eb-17d8b8d2bce5.JPG"></img>
          <h1 className="App-title">Hi, I'm Shari.</h1>
          <div className="intro">
            <p className="App-intro">I'm a Front End Web Developer with a passion for creating remarkable user experiences.</p>
            <p className="App-coffee">Oh, and coffee. I love coffee.</p>
          </div>
        </header>
          <div>
            <Bio />
            <Projects />
          </div>
          <footer></footer>
      </div>
    );
  }
}

export default App;
