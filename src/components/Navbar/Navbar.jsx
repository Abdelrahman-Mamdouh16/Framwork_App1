import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import $ from 'jquery'
<reference type={'./../../../@types/jquery'} />

export default function Navbar() {
    const myStyle = {
        width: 'fit-content',
        pointerEvents: 'auto',
    }

    useEffect(() => {
        $(window).on('scroll', () => {
            const scroll = $(window).scrollTop();
            if (scroll > 30) {
                $('#navBar').addClass('py-2').removeClass('py-4').css({'transition': 'all 1s'});
            }else{
                $('#navBar').addClass('py-4').removeClass('py-2').css({'transition': 'all .3s'});
            }
        })
    }, [])



    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 position-fixed  fixed-top w-100" style={{ backgroundColor: '#2d3e4f' }} id='navBar'>
                <div className="container">
                    <Link to={''} className="navbar-brand text-light fs-2 fw-bolder">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item me-3">
                                <NavLink to={'About'} className="nav-link text-light fw-bold mt-3 mt-md-0 px-2" aria-current="page" href="#" style={myStyle}>ABOUT</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink to={'Portfolio'} className="nav-link text-light fw-bold mt-3 mt-md-0 px-2" href="#" style={myStyle}>PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink to={'Contact'} className="nav-link text-light fw-bold mt-3 mt-md-0 px-2" href="#" style={myStyle}>CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
