import React from 'react';
import { config } from '../../../data';
import NavItem from '../Navbar/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const { navbarList = [] } = config;

const {
  githubUsername,
  twitterUsername,
  linkedinUsername,
  email,
  facebook,
} = config;

const Icon = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    rel="external nofollow noopener noreferrer"
    className="custom-icon mlr"
  >
    <span className="fa-layers fa-fw fa-2x">
      <FontAwesomeIcon icon={icon} />
    </span>
  </a>
);

const Footer = () => (
  <footer className="footer">
    <div className="container pt-4">
      <div className="row justify-center div-wrap">
      <div className="mt-12 text-4xl contact-div order-3 order-none">
        <Icon
        href={`https://github.com/${githubUsername}`}
        icon={['fab', 'github']}
      />
      <Icon
        href={`https://www.linkedin.com/in/${linkedinUsername}`}
        icon={['fab', 'linkedin']}
      />
      <Icon
        href={`https://twitter.com/${twitterUsername}`}
        icon={['fab', 'twitter']}
      />
      <Icon href={`mailto:${email}`} icon={['far', 'envelope']} />
      {facebook
        && <Icon href={`https://www.facebook.com/${facebook}/`} icon={['fab', 'facebook']} />
      }
        </div>
        
        <div className="link-div">
      <ul className="contact-mr ul-pb ul-pl  row flex div-wrap div-wrap2">
          {navbarList.map(item => (
            <NavItem
              url={item.href}
              name={item.title}
              list={item.list}
              key={item.href}
            />
          ))}
        </ul>
        </div>
        </div>
    </div>
    <div className="copyright">
    © Copyright 2020. HeisenBerg Labs
    </div>
  </footer>
);

export default Footer;
