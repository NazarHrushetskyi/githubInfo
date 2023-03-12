import React from 'react';

import { Link } from 'react-router-dom';
import GitLogo from '../assets/img/git_logo.svg';
import Search from './Search';
import Sign from './Sign';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <div className="header__logo">
            <img src={GitLogo} alt="Logo" />
          </div>
        </Link>
        <div className="head_text">Git hub searcher</div>
        <div className="head_right">
          <Search />
          <Sign />
        </div>
      </div>
    </div>
  );
};

export default Header;
