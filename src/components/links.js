import React from 'react';
import './links.css';

export default function Links() {
  return (
    <nav>
      <a
        href="https://github.com/sharihobbs"
        aria-label="GitHub"
        target="_blank"
      >
        GitHub{'  '}|{'  '}
      </a>
      <a
        href="https://twitter.com/gimmethecache"
        aria-label="Twitter"
        target="_blank"
      >
        Twitter{'  '}|{'  '}
      </a>
      <a
        href="https://www.linkedin.com/in/shari-hobbs-az/"
        aria-label="LinkedIn"
        target = "_blank"
      >
        LinkedIn{'  '}|{'  '}
      </a>
      <a
        href="mailto:sharirhobbs@gmail.com"
        aria-label="Email"
      >
        Email
      </a>
    </nav>
  );
}
