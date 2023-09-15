import React, { Component } from 'react';
import avataaars from '../../assits/avataaars.svg'
import './Home.css'
import { Helmet } from 'react-helmet';

export default class Home extends Component {
    render() {
        return (<>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="Home position-relative" style={{ marginTop:'93px', minHeight:'calc(100vh - 115px)',}} id='Home'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 " >
                            <div className="content text-center  position-absolute">
                                <div className="img">
                                    <img src={avataaars} alt="" className='' style={{ width: '250px' }} />
                                </div>
                                <div className="text">
                                    <h1 className='mt-4 fw-bold'>START FRAMEWORK</h1>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-3 mt-3">
                                    <div className="line me-3" style={{ backgroundColor: 'white', height: '4px', width: '80px', }}></div>
                                    <i className="fa-solid fa-star"></i>
                                    <div className="line ms-3" style={{ backgroundColor: 'white', height: '4px', width: '80px', }}></div>
                                </div>
                                <div className="paragraph mt-3">
                                    <p>Graphic Artist - Web Designer - Illustrator</p>
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
