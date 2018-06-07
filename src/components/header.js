import React, { Component } from 'react';
import Links from './links';
import './header.css';

export default function Header(){
  return (
    <div>
      <img src="https://user-images.githubusercontent.com/29738609/41079220-b2868bd0-69d5-11e8-8afb-80ee0a74916c.JPG" className="background" alt="Riparian Preserve"></img>
      <div className="row app-header">
        <h1 className="app-title">SHARI HOBBS</h1>
        <div className="intro">
          <p className="app-intro">Front End Web Developer in Phoenix, AZ who loves coffee, running, and running to get more coffee.</p>
          <div className="social-media">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
