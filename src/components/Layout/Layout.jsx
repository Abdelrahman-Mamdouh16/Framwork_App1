import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    const app = {
      'min-height': '100vh',
      'display': 'flex',
      'flex-direction': 'column',

    }
    return (
      <>
        <div className="app" style={app}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>

      </>
    )
  }
}
