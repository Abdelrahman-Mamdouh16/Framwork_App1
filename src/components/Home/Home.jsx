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
                <div className="Home py-4" style={{marginTop:'105px',}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center" >
                                <img src={avataaars} alt="" className='mb-2' style={{ width: '250px' }} />
                                <h1 className='mt-4 fw-bold'>START FRAMEWORK</h1>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <div class="line me-3" style={{ backgroundColor: 'white', height: '4px', width: '80px', }}></div>
                                    <i class="fa-solid fa-star"></i>
                                    <div class="line ms-3" style={{ backgroundColor: 'white', height: '4px', width: '80px', }}></div>
                                </div>
                                <p>Graphic Artist - Web Designer - Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
                </>
        )
    }
}
