import React from 'react'
// import { NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="grid navbar-grid">
                        <div className="Logo">
                            <a href="/">
                                <h1>WorldAtlas</h1>
                            </a>
                        </div>

                        <nav>
                            <ul>
                                <li>
                                    <a to="/">Home</a>
                                </li>
                                <li>
                                    <a to="/about">About</a>
                                </li>
                                <li>
                                    <a to="/country">Country</a>
                                </li>
                                <li>
                                    <a to="/contact">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        {/* <div className="ham-menu">
                            <button >
                                <GiHamburgerMenu />
                            </button>
                        </div> */}
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Home
