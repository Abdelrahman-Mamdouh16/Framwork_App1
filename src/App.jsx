import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Portfolio from './components/PORTFOLIO/Portfolio.jsx';
import Contact from './components/CONTACT/Contact.jsx';
import Layout from './components/Layout/Layout.jsx';
import NotFound from './components/NotFound/NotFound.jsx';


export default class App extends Component {

  render() {
    const router = createBrowserRouter([{
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Portfolio', element: <Portfolio /> },
        { path: 'Contact', element: <Contact /> },
        { path: '*', element: <NotFound/> }

      ]
    }])
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
  }
}
