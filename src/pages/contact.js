import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { config } from '../../data';
import "./pages.scss"

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
      className="contact-icon"
    >
      <span className="fa-layers fa-fw fa-2x">
        <FontAwesomeIcon icon={icon} />
      </span>
    </a>
  );

const Contact=()=>{

    return (
        <div className="container mx-auto flex justify-center">
         <div className="text-center mt-16  flex-col justify-center">
        <h1 className="text-5xl">
            Contact
        </h1>
        <p className="mt-6 text-ink-50">
            If you want to say hello! Best way to reach me is on social media.
        </p>
        <div className="mt-12 text-4xl contact-div">
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
        <hr className="mt-10 mb-10 no-border " />
        <section className="lg-flex justify-center ">
            <div className="conact-card">
                <p className="text-lg leading-tight">
                    Spot a bug on the site?
                </p> <a data-v-b46e2d7c=""
                    href={`https://github.com/${githubUsername}/HeisenBerg-Blog/issues/new?assignees=${githubUsername}&amp;labels=&amp;template=site-bug-report.md&amp;title=%5BBug+Report%5D`}
                    rel="noopener noreferrer" target="_blank"
                    className="text-base text-fuscia hover:text-fuscia-dark hover:underline cursor-pointer hover-transition">
                    Submit issue
                    </a>
            </div>
            <div className="conact-card md:mx-10 my-6 md:my-5 lg:my-0">
                <p className="text-lg leading-tight">
                    Can the site be improved?
                </p> <a data-v-b46e2d7c=""
                    href={`https://github.com/${githubUsername}/HeisenBerg-Blog/issues/new?assignees=${githubUsername}&amp;labels=&amp;template=site-bug-report.md&amp;title=%5BBug+Report%5D`}
                    rel="noopener noreferrer" target="_blank"
                    className="text-base text-fuscia hover:text-fuscia-dark hover:underline cursor-pointer hover-transition">
                    Request feature 
                    </a>
            </div>
            <div className="conact-card">
                <p className="text-lg leading-tight">
                    Topic you want me to cover?
                </p> <a data-v-b46e2d7c=""
                     href={`https://github.com/${githubUsername}/HeisenBerg-Blog/issues/new?assignees=${githubUsername}&amp;labels=&amp;template=site-bug-report.md&amp;title=%5BBug+Report%5D`}
                    rel="noopener noreferrer" target="_blank"
                    className="text-base text-fuscia hover:text-fuscia-dark hover:underline cursor-pointer hover-transition">
                    Suggest content 
                    </a>
            </div>
        </section>
        <hr className="mt-10 mb-10 no-border" />
        <p className="leading-tight"><strong>For all business inquiries, please email me </strong></p>
        <div className="mt-4"><a href="mailto: akulasaikrishna2@gmail.com"
                className="text-fuscia hover:text-fuscia-dark hover:underline cursor-pointer hover-transition">
                akulasaikrishna2@gmail.com
            </a>
        </div>
        <hr className="mt-10 mb-10 no-border " />
        
    </div>
</div>
    );

};
export default Contact;