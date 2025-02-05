import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { HeroSection } from '../../layout/UI/HeroSectio';
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
    const [isActive, setisActive] = useState(false)
    const handleToggle = () => [
        setisActive(!isActive)
    ]
    return (
        <div>
            <header>
                <div className="container">
                    <div className="grid navbar-grid">
                        <div className="Logo">
                            <NavLink to="/">
                                <h1>WorldAtlas</h1>
                            </NavLink>
                        </div>

                        <nav className={isActive?"menu-mobile":"menu-web"}>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/country">Country</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="ham-menu">
                            <button onClick={handleToggle}>
                                <GiHamburgerMenu />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Home
