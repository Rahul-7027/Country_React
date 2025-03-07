import React from 'react'

const SearchFilter = ({ search, filter, setFilter, setSearch, data,
    setData, }) => {

    const handleInputChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }

    const handleSelectChange = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
    }


    const sortCountries = (element) => {
        const sortCountryData = [...data].sort((a, b) => {
            return element === "asc"
                ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
        })
        setData(sortCountryData)
    }

    return (
        <div>
            <section className="section-searchFilter container">
                <div>
                    <input
                        type="text"
                        placeholder="search"
                        value={search}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <button

                        onClick={() => sortCountries("asc")}
                    >Asc</button>
                </div>

                <div>
                    <button

                        onClick={() => sortCountries("des")}
                    >Desc</button>
                </div>

                <div>
                    <select
                        className="select-section"
                        value={filter}
                        onChange={handleSelectChange}
                    >
                        <option value="all">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </section>
        </div>
    )
}

export default SearchFilter
