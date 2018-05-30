import React from 'react';
import './projects.css';
import '../grid.css';

export default function Projects() {
  return (
    <div className="row">
      <div className="projects">
        <h2>What have I been working on?...</h2>
        <div className="screenshot"></div>
        <p className="info">OnHand is a recipe search tool for the cook looking to make something new with what they already have on hand. A convenient, in-app shopping list keeps track of any additional ingredients needed for the user's next culinary adventure.

        </p>
       </div>
        <div className="projects">
        <div className="screenshot"></div>
        <p className="info">Capture was inspired by the mindfulness practice of recognizing moments of gratitude throughout one's day. Keeping a log of what stirs joy or contentment is the best way to stay in a state of gratitude in even the most mundane moments.

        </p>
       </div>
        <div className="projects">
        <div className="screenshot"></div>
        <p className="info">Tome was built because I found myself often forgetting the titles of books that were recommended in a magazine or by my son's teacher. With a handy note feature, you can keep track of where you first heard of a particular title, who might want to read it next, or when it needs to be in the mail to your Aunt Beth. Tome is simple, no-fuss, and utilizes the Google Books API Family to provide reliable, up to date information.
        </p>
       </div>
    </div>
  );
}
