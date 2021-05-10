import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Navbar from './NavBar'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className='homepage'>
          <h1 className='homepage__heading'>
            Make your inventory more visible with this tailored stock management WebApp
          </h1>
          <Link className="homepage__cta" to="/register">Sign up for free</Link>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home