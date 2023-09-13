import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Contact extends Component {

    render() {

        return (
            <>
                <Helmet>
                    <title>Contact</title>
                </Helmet>
                <div className="Contact text-black" style={{ marginTop: '80px', backgroundColor: 'white' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 " >
                                <h1 className='fw-bold text-center text-black mt-5'>CONTACT SECTION</h1>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <div class="line me-3" style={{ backgroundColor: 'black', height: '4px', width: '80px', }}></div>
                                    <i class="fa-solid fa-star"></i>
                                    <div class="line ms-3" style={{ backgroundColor: 'black', height: '4px', width: '80px', }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container w-75 m-auto mt-5 px-5">
                        <div className="row mb-5">
                            {/* <form action="" > */}
                                <div className="col-md-12 ">
                                    <input id="userName" type="text" placeholder="User Name" name="userName" class=" form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                                </div>
                                <div className="col-md-12 mt-5">
                                    <input id="userAge" type="text" placeholder="userAge" name="userName" class="  form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                                </div>
                                <div className="col-md-12 mt-5">
                                    <input id="userEmail" type="text" placeholder="userEmail" name="userName" class=" form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                                </div>
                                <div className="col-md-12 mt-5">
                                    <input id="userPassword" type="text" placeholder="userPassword" name="userName" class=" form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                                </div>
                                <div className="col-md-12 mt-5">
                                    <button class="m-auto btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}> send </button>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
