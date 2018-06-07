import React, { Component } from 'react';
import Header from './components/header';
import Bio from './components/bio';
import Projects from './components/projects';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app row">
          <div>
            <Header />
            <div class="arrow bounce">
              <AnchorLink class="fa fa-angle-double-down fa-2x" href="#projects"></AnchorLink>
            </div>
            <div id="projects">
              <Projects />
              <hr class="someClass"></hr>
              <Bio />
            </div>
          </div>
          <footer></footer>
      </div>
    );
  }
}

export default App;
