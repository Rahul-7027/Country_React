import React, { useEffect, useState } from 'react'
import { useTransition } from 'react';
import { getCountryData } from '../../api/GetApi';
import Loader from '../../layout/UI/Loader';
import CountryCard from '../../layout/CountryCard';
import SearchFilter from '../../layout/UI/SearchFilter';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await getCountryData();
        setData(response.data);
        console.log("country data : ", response.data)
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    });
  }, []);


  if (isPending) return (<Loader />)

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  console.log(2222, search, filter)
  return (
    <div>

      <section className='country-section'>
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
        <ul className='grid grid-four-cols'>
          {filterCountries.filter((element, index) => {
            return <CountryCard country={element} key={index} />
          })}
        </ul>

      </section>
    </div>
  )
}

export default Country
