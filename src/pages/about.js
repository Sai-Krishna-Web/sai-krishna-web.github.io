import React from 'react';
import{Link} from 'gatsby';

import Sidebar from '../components/Sidebar';
import "./pages.scss";

const About=()=>{
    return(
        <div class="container">
         <div className="row">
         
          <Sidebar />
          <div class="tag-container col-xl-9 col-lg-6 col-md-12 col-sm-12 order-2 mt-10">
            <div class="markdown text-markdown">
            <h1>About Me</h1>
            </div>
            <h3>Hi, I'm <span className="name-span">Sai Krishna</span></h3>
            <p class="text-size">
            I'm a Full-Stack Web Developer. I love to learn and discover all things JavaScript, ReactJS, Angular, .NET, C#, HTML, and CSS.
            </p>
            <div>
                <img src="https://imgur.com/oUYyhk8.jpg" alt="Sai Krishna avatar" style={{height:300}}></img>
            </div>
            <p>
            So you're here to learn more about me.I am working professional with 3+ years experience as web developer with a love of great UI frameworks and libraries, 
            to develop fast and User friendly web applications. </p>
            <p>How did I get into tech? I love learning new things. 
            And we know, tech was the perfect place to be. It’s always changing and always moving forward. First, there was jQuery, then Angular, then React, and now we have Vue.Js and many more. Some people might find this overwhelming but I love it. 
            You’ll never run out of things to learn.
            </p>
            <div>
            <h2>Qusetions</h2>
            <p>Got a question for me or would like to get in touch, 
                <Link to={`/contact/`} href={`/contact/`}> Contact Me</Link>!
            </p>
            </div>
          </div>
          </div>
          </div>
    );
};
export default About;