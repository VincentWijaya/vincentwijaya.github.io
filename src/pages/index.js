import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
class IndexPage extends Component {
  state = {
    works: [
      {
        title: 'TODO FANCY',
        image: require('../images/todo.png'),
        url: 'https://todo-fancy-aadae.firebaseapp.com',
        description: 'A simple todo app with Facebook login!'
      },
      {
        title: 'TAMVAN APP',
        image: require('../images/kanban.png'),
        url: 'https://tamvan-ec3e6.firebaseapp.com',
        description: 'A simple real-time kanban board!'
      },
      {
        title: 'RAHASIA SAYA',
        image: require('../images/rahasia-saya.png'),
        url: 'https://rahasia-saya.firebaseapp.com',
        description: 'Web based app to manage your password!'
      },
      {
        title: 'RAISHANRISE',
        image: require('../images/raishanrise.png'),
        url: 'https://raishanrise.my.id/',
        description: 'Raisha Syifa fanbase website'
      },
    ]
  }
  render() {
    const { works } = this.state;
    console.log('🔥🔥🔥🔥 Find me on Instagram (https://www.instagram.com/vincwijaya/) 🔥🔥🔥🔥')
    return (
      <Layout>
        <SEO title="Portofolio" keywords={[`vincent`, `vincent wijaya`, `portofolio vincent`, `portofolio vincent wijaya`, `Vincent Wijaya`]} />
        <h1 style={{ textAlign: 'center' }}>Featured Work</h1>
        <div className="containerCard">
          {works.map((work, index) => (
            <div key={index} className="card">
              <center>
                <div className="borderImage">
                  <a href={work.url} target="_blank" rel="noopener noreferrer">
                    <img src={work.image} alt={work.title}/>
                  </a>
                </div>
              </center>
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <h3>{work.title}</h3>
              </a>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default IndexPage;
