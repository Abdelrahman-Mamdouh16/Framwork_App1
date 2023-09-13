import React, { Component } from 'react'
import ass from './../../assits/error.svg'
import { Helmet } from 'react-helmet'
import './NotFound.css'
export default class NotFound extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Page Not Found 404</title>
                </Helmet>
                <div className="img text-center" style={{ margin: '80px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" >
                                <img src={ass} alt="" className='mt-5'/>
                            </div>
                            <div className="col-md-12">
                                <h1 className='' style={{ color: 'green' }}>Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
