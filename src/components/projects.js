import React from 'react';
import './projects.css';
import '../grid.css';

export default function Projects() {
  return (
    <div className="row">
      <h2 className="projects-title">Recent Projects</h2>
      <div className="projects">
        <img className="screenshot" src="https://user-images.githubusercontent.com/29738609/41078269-9ce70e80-69d0-11e8-932a-946b10b2392c.png" alt="OnHand"></img>
        <div className="info">
          <h3>OnHand</h3>
          <p>A recipe search tool for the cook looking to make something new with what they already have on hand. A convenient, in-app shopping list keeps track of any additional ingredients needed for the user's next culinary adventure.
          </p>
          <a className="demo-code" href="https://sharihobbs.github.io/on-hand/" target="_blank">Live Demo Site{'  '}|{'  '}</a>
          <a className="demo-code" href="https://github.com/sharihobbs/on-hand" target="_blank">See it on GitHub</a>
        </div>
      </div>
      <div className="projects">
        <img className="screenshot" src="https://user-images.githubusercontent.com/29738609/41078306-d2398bda-69d0-11e8-83b9-300c29d077a1.png" alt="Capture"></img>
        <div className="info">
          <h3>Capture</h3>
          <p>An app inspired by the mindfulness practice of recognizing moments of gratitude throughout one's day. Keeping a log of what stirs joy or contentment is the best way to stay in a state of gratitude in even the most mundane moments.
          </p>
          <a className="demo-code" href="https://cryptic-plateau-80384.herokuapp.com/" target="_blank">Live Demo Site{'  '}|{'  '}</a>
          <a className="demo-code" href="https://github.com/sharihobbs/capture" target="_blank">See it on GitHub</a>
        </div>
      </div>
      <div className="projects">
        <img className="screenshot" src="https://user-images.githubusercontent.com/29738609/41078324-e8f6dd78-69d0-11e8-9820-d6d319115c68.png" alt="Tome"></img>
        <div className="info">
        <h3>Tome</h3>
          <p>Built to keep track of books that were recommended by friends, family, or in a magazine, online, etc. With the handy note feature, you can keep track of where you first heard of a particular title or who might want to read it next. Tome is simple, easy to reference, and utilizes the Google Books API Family to provide reliable, up to date information.
          </p>
          <a className="demo-code" href="https://sharp-swirles-724079.netlify.com/" target="_blank">Live Demo Site{'  '}|{'  '}</a>
          <a className="demo-code" href="https://github.com/sharihobbs/tome-client" target="_blank">See it on GitHub</a>
        </div>
      </div>
    </div>
  );
}
