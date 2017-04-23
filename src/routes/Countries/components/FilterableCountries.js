import React from 'react'
import PropTypes from 'prop-types'
import { Countries } from './Countries'
import { SearchBar } from './SearchBar'

export const FilterableCountries = (props) => (
  <div className="filterable-countries">
    <h1>Countries</h1>
    <SearchBar fetch={props.fetchCountries}></SearchBar>
    <Countries countries={props.countries}></Countries>
  </div>
)

FilterableCountries.propTypes = {
  fetchCountries    : PropTypes.func.isRequired,
  countries         : PropTypes.array.isRequired
}

export default FilterableCountries
