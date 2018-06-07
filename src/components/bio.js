import React from 'react';
import './bio.css';
import '../grid.css';

export default function Bio() {
  return (
    <div className="row bio-width">
      <div className="bio">
        <img className="image" src="https://user-images.githubusercontent.com/29738609/41066601-37ab420e-6997-11e8-9f39-c59e2a789d57.JPG"></img>
        <img className="squirrel" src="https://user-images.githubusercontent.com/29738609/41131091-ad6ad716-6a6e-11e8-97e4-2224784009fd.png"></img>
        <h2 className="about">About me</h2>
        <p className="bio-p">After a career in customer service and operations management, I wanted to try something new. Web development is that thing. As soon as I finished my first project, I knew that Front End Development and designing delightful user experiences is where I would land when I was finished learning. Of course, I soon found out that the learning, quite literally, never ends and that's been awesome. As it turns out, I love picking up new technologies and finding clever ways to work with the tools at hand.
        </p>
      </div>
    </div>
  );
}
