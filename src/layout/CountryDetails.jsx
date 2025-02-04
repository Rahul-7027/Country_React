import React, { useTransition, useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Loader from '../layout/UI/Loader';
import { getCountryData, getCountryDataIndia } from '../api/GetApi';

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryDataIndia(params.id);
      console.log(res);
      if (res.status === 200) {
        setData(res.data[0]);
      }

      console.log(1111111111,Object.keys(res.data[0].name.nativeName));
    });
  }, []);


  if (isPending) return <Loader />;
  return (
    <div>
      <section className="card country-details-card container">
        <div className="container-card bg-white-box">
          {data && (
            <div className="country-image grid grid-two-cols">
              <img
                src={data.flags.svg}
                alt={data.flags.alt}
                className="flag"
              />
              <div className="country-content">
                <p className="card-title"> {data.name.official} </p>

                <div className="infoContainer">
                  <p>
                    <span className="card-description"> Native Names:</span>
                    {Object.keys(data.name.nativeName)
                      .map((key) => data.name.nativeName[key].common)
                      .join(", ")}
                  </p>
                  <p>
                    <span className="card-description"> Population: </span>
                    {data.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="card-description"> Region:</span>
                    {data.region}
                  </p>
                  <p>
                    <span className="card-description"> Sub Region:</span>
                    {data.subregion}
                  </p>
                  <p>
                    <span className="card-description"> Capital:</span>
                    {data.capital}
                  </p>

                  <p>
                    <span className="card-description">Top Level Domain:</span>
                    {data.tld[0]}
                  </p>
                  <p>
                    <span className="card-description"> Currencies: </span>
                    {Object.keys(data.currencies)
                      .map((curElem) => data.currencies[curElem].name)
                      .join(", ")}
                  </p>
                  <p>
                    <span className="card-description">Languages: </span>
                    {Object.keys(data.languages)
                      .map((key) => data.languages[key])
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="country-card-backBtn">
            <NavLink to="/country" className="backBtn">
              <button>Go Back</button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetails;
