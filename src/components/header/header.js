import PropTypes from "prop-types";
import React from "react";
import './header.css';

const Header = ({ siteTitle, description }) => {
  return (
    <header className="header" align="center">
      <img className="avatar" src={require('../../images/profile.jpg')} alt="avatar"/>
      <div className="textHeader">
        <h1>{siteTitle}</h1>
        <h3>Software Engineer</h3>
        <p>
          I'm obsessed with making things and even more obsessed with making things better. I've been start coding since I wrote my first code with C++. After graduating from the SMK Telkom Sandhy Putra Jakarta, I've join Hacktiv8 Indonesia and start learning to be a Fullstack Javascript Developer.<br/><br/>

          My specialty is full website strategy and development. I open for any position that related with Web or Mobile development.<br/><br/>

          When I'm not coding. I'm probably hanging out with my mom and my sister, playing games, or watching Youtube.
        </p>
      </div>
      <div className="logoCompany">
        <a href="https://github.com/vincentwijaya" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/vincent-wijaya-98051356/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://bit.ly/2WuZFL1" target="_blank" rel="noopener noreferrer"><i className="far fa-file"></i></a>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
