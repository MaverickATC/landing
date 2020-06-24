import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = ({ ref }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{height: '10vh'}}>
            <div className="navbar-brand">Logo</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink
                            className="nav-link"
                            to={{
                                pathname: "/"
                            }}
                            style={{ color: '#fff' }}
                        >Header</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to={{
                                pathname: "/",
                                hash: "#bs"
                            }}
                            style={{ color: '#fff' }}
                        >Footer</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}