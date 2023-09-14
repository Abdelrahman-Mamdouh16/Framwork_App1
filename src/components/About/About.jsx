import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import '../Home/Home.css'
export default class About extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>About</title>
                </Helmet>
                <div className="About text-white position-relative overflow-hidden text-center" style={{ marginTop: '95px', minHeight: 'calc(100vh - 115px)', backgroundColor: '#3bba9f' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content position-absolute">
                                    <div className="text">
                                        <h1 className='fw-bold m-5 text-center'>ABOUT COMPONENT</h1>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <div className="line me-3" style={{ backgroundColor: 'white', height: '4px', width: '80px', }}></div>
                                        <i className="fa-solid fa-star"></i>
                                        <div className="line ms-3" style={{ backgroundColor: 'white', height: '4px', width: '80px', }}></div>
                                    </div>
                                    <div className="row mb-5 px-5">
                                        <div className="col-md-6">
                                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
