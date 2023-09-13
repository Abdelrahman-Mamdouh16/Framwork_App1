import React, { Component } from 'react'
import poert1 from '../../assits/poert1.png'
import poert2 from '../../assits/port2.png'
import poert3 from '../../assits/port3.png'
import '../../../node_modules/lightbox2/dist/css/lightbox.min.css'
import '../../../node_modules/lightbox2/dist/js/lightbox-plus-jquery.js'
import './Portfolio.css'
import { Helmet } from 'react-helmet'
export default class Portfolio extends Component {
    render() {

        return (
            <>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
                <div className="Portfolio py-4" style={{ marginTop: '105px', }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center" >
                                <h1 className='mt-4 fw-bold'>PORTFOLIO COMPONENT</h1>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <div class="line me-3" style={{ backgroundColor: 'black', height: '4px', width: '80px', }}></div>
                                    <i class="fa-solid fa-star"></i>
                                    <div class="line ms-3" style={{ backgroundColor: 'black', height: '4px', width: '80px', }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 cards">
                            <div className="col-md-4">
                                <div className="img position-relative ">
                                    <a href={poert1} data-lightbox={'poert1'}>
                                        <div className="layout position-absolute rounded-3 d-flex justify-content-center align-items-center ">
                                            <i class="icon text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </a>
                                    <img src={poert1} className='w-100 rounded-3' alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img position-relative ">
                                    <a href={poert2} data-lightbox={'poert1'}>
                                        <div className="layout position-absolute rounded-3 d-flex justify-content-center align-items-center ">
                                            <i class="icon text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </a>
                                    <img src={poert2} className='w-100 rounded-3' alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img position-relative ">
                                    <a href={poert3} data-lightbox={'poert1'}>
                                        <div className="layout position-absolute rounded-3 d-flex justify-content-center align-items-center ">
                                            <i class="icon text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </a>
                                    <img src={poert3} className='w-100 rounded-3' alt="" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="img position-relative ">
                                    <a href={poert2} data-lightbox={'poert1'}>
                                        <div className="layout position-absolute rounded-3 d-flex justify-content-center align-items-center ">
                                            <i class="icon text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </a>
                                    <img src={poert2} className='w-100 rounded-3' alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img position-relative ">
                                    <a href={poert3} data-lightbox={'poert1'}>
                                        <div className="layout position-absolute rounded-3 d-flex justify-content-center align-items-center ">
                                            <i class="icon text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </a>
                                    <img src={poert3} className='w-100 rounded-3' alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img position-relative ">
                                    <a href={poert1} data-lightbox={'poert1'}>
                                        <div className="layout position-absolute rounded-3 d-flex justify-content-center align-items-center ">
                                            <i class="icon text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </a>
                                    <img src={poert1} className='w-100 rounded-3' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
