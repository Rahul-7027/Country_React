import React from 'react'
import CountryData from "../.././api/CountryData.json"

const About = () => {
  return (
    <div>
      <section className="section-about container">
        <h2 className="container-title">
          Here are the Interesting Facts
          <br />
          we’re proud of
        </h2>

        <div className="gradient-cards">
          {CountryData.map((country) => {
            const { id, countryName, capital, population, interestingFact,image } =
              country;
            return (
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  {/* <img className='img-country' src={image} alt="" /> */}
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">Capital:</span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-description">Population:</span>
                    {population}
                  </p>
                  <p>
                    <span className="card-description">Interesting Fact:</span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default About
