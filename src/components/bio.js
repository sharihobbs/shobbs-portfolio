import React from 'react';
import './bio.css';
import '../grid.css';

export default function Bio() {
  return (
    <div className="row">
      <div className="bio">
        <h2>About me...</h2>
        <p>After a career in customer service and operations management, I wanted to try something new. Web development is that thing. As soon as I finished my first project, I knew that Front End Development and designing delightful User Experiences is where I would land when I was finished learning. Of course, I soon found out that the learning, quite literally, never ends and that's been awesome. As it turns out, I love picking up new technologies and finding clever ways to work with the tools at hand. Any questions? Please contact me! Happy to talk about anything and everything...
        </p>
       </div>
       <div className="social-media">
          <p className="links">GitHub | Twitter | LinkedIn | Email</p>
        </div>
    </div>
  );
}
