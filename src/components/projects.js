import React from 'react';
import './projects.css';
import '../grid.css';

export default function Projects() {
  return (
    <div className="row">
      <div className="projects">
        <h2>Recent Projects...</h2>
        <img className="screenshot" src="https://user-images.githubusercontent.com/29738609/37367091-b1afc4aa-26bf-11e8-95fc-7a9d1e7f9a96.png" alt="OnHand"></img>
        <p className="info">OnHand is a recipe search tool for the cook looking to make something new with what they already have on hand. A convenient, in-app shopping list keeps track of any additional ingredients needed for the user's next culinary adventure.
        </p>
        <a className="demo" href="https://sharihobbs.github.io/on-hand/" target="_blank">Live Demo Site</a>
       </div>
        <div className="projects">
        <img className="screenshot" src="https://user-images.githubusercontent.com/29738609/40741813-5143605c-6401-11e8-8e8d-61e63daa178e.png" alt="Capture"></img>
        <p className="info">Capture was inspired by the mindfulness practice of recognizing moments of gratitude throughout one's day. Keeping a log of what stirs joy or contentment is the best way to stay in a state of gratitude in even the most mundane moments.
        </p>
        <a className="demo" href="https://cryptic-plateau-80384.herokuapp.com/" target="_blank">Live Demo Site</a>
       </div>
        <div className="projects">
        <img className="screenshot" src="https://user-images.githubusercontent.com/29738609/40741972-d10ec330-6401-11e8-9a53-7ae3e3558a18.png" alt="Tome"></img>
        <p className="info">Tome was built because I found myself often forgetting the titles of books that were recommended in a magazine or by my son's teacher. With a handy note feature, you can keep track of where you first heard of a particular title, who might want to read it next, or when it needs to be in the mail to your Aunt Beth. Tome is simple, no-fuss, and utilizes the Google Books API Family to provide reliable, up to date information.
        </p>
        <a className="demo" href="https://sharp-swirles-724079.netlify.com/" target="_blank">Live Demo Site</a>
       </div>
    </div>
  );
}
