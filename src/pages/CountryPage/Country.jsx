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
  const [filter, setFilter] = useState("all")

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

  // Search Logic 
  const searchCountry = (data) => {
    if (data) { return data.name.common.toLowerCase().includes(search.toLowerCase()) }
    else { return data }
  }

  // Filter Logic 

  const filterCountryRegion = (data) => {
    if (filter === "all") return data;
    return data.region === filter
  }

  // Combine for main & Search Logic 
  const FilterData = data.filter((element) => searchCountry(element) && filterCountryRegion(element))

  if (isPending) return (<Loader />)


  console.log(2222, search, filter)
  return (
    <div>

      <section className='country-section'>
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          data={data}
          setData={setData}
        />
        <ul className='grid grid-four-cols'>
          {FilterData.map((element, index) => {
            return <CountryCard country={element} key={index} />
          })}
        </ul>

      </section>
    </div>
  )
}

export default Country
