import React from 'react';
import './links.css';

export default function Links() {
  return (
    <nav className="links-header">
      <a className="link-item"
        href="https://github.com/sharihobbs"
        aria-label="GitHub"
        target="_blank">
        <i className="fa fa-github"></i>
      </a>
      <a className="link-item"
        href="https://twitter.com/gimmethecache"
        aria-label="Twitter"
        target="_blank">
        <i className="fa fa-twitter"></i>
      </a>
      <a className="link-item"
        href="https://www.linkedin.com/in/shari-hobbs-az/"
        aria-label="LinkedIn"
        target="_blank">
        <i className="fa fa-linkedin"></i>
      </a>
      <a className="link-item"
        href="mailto:sharirhobbs@gmail.com"
        aria-label="Email"
        target="_blank">
        <i className="fa fa-envelope"></i>
      </a>
        <a className="link-item"
        href="https://github.com/sharihobbs/shobbs-portfolio/files/2128436/ShariHobbs2018.pdf"
        aria-label="Resume"
        target="_blank">
        <i className="fa fa-file"></i>
      </a>
    </nav>
  );
}



