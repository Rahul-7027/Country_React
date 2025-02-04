import React from 'react'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country
    return (
        <div>
            <li className='country-card card' >
                <div className="container-card bg-white-box">
                    <img src={flags.svg} alt="Loading..." />
                    <div className="countryInfo">
                        <p className="card-title">{name.common}</p>
                        <p><span className="card-description"></span> Population :{population.toLocaleString()}</p>
                        <p><span className="card-description"></span> Region :{region}</p>
                        <p><span className="card-description"></span> Capital :{capital}</p>
                    </div>
                    <NavLink to={`/country/${name.common}`}><button type="button">Read More</button></NavLink>

                </div>

            </li>

        </div>
    )
}

export default CountryCard
