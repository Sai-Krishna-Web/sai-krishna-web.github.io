import React from 'react';

import ExternalLink from '../ExternalLink';
import { config } from '../../../data';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />
            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />
            .&nbsp;Hosted on&nbsp;
            <ExternalLink href="https://www.netlify.com/" title="Netlify" />
            <br />
            The code is open source and available at&nbsp;
            <ExternalLink
              href="https://github.com/Sai-Krishna-Web/HeisenBerg-Blog"
              title="HeisenBerg's Blog"
            />
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="https://heisenberg-blog.netlify.app/" title="&copy;HeisenBerg Labs" />
            &nbsp;
            {config.title}
            {new Date().getFullYear()}
            
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
