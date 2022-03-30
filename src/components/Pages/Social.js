import React from 'react';
import './Social.css';
import { Icon } from '@iconify/react';

export default function Social() {
  return (
    <nav className="social nav">
      <ul>
          <a href="https://github.com/polizoto" title="GitHub" rel="noreferrer" target="_blank">
          <Icon icon="akar-icons:github-outline-fill" height="40" /></a>
          <a href="https://stackoverflow.com/users/12904106/joseph-polizzotto" title="Stack Overflow" rel="noreferrer" target="_blank">
          <Icon icon="bi:stack-overflow" height="40" />
          </a>
          <a href="https://www.linkedin.com/in/joseph-polizzotto-4b4a761a" title="LinkedIn" rel="noreferrer" target="_blank">
          <Icon icon="feather:linkedin" height="40" />
          </a>
      </ul>
    </nav>
  );
}