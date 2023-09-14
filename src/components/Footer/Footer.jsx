import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer" style={{ backgroundColor: '#2d3e4f' }}>
          <div className="container py-5 ">
            <div className="row ">
              <div className="col-md-4">
                <div className="card border-0 text-white bg-transparent">
                  <div className="card-body text-center">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-white border-0 text-white bg-transparent">
                  <div className="card-body text-center">
                    <h3>AROUND THE WEB</h3>
                    <div className="icons">
                      <i className="fa-brands fa-facebook mx-1 icon" />
                      <i className="fa-brands fa-twitter mx-1 icon" />
                      <i className="fa-brands fa-linkedin-in mx-1 icon" />
                      <i className="fa-solid fa-globe mx-1 icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 text-white bg-transparent">
                  <div className="card-body text-center">
                    <h3>ABOUT FREELANCER</h3>
                    <p className='w-75 m-auto'> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="textFooter text-center text-white py-3" style={{ backgroundColor: '#1b252f' }}>
            <p className='mt-3'>Copyright © Your Website 2023</p>
          </div>
        </div>
      </>
    )
  }
}
