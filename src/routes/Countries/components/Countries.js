import React from 'react'
import PropTypes from 'prop-types'
import { Country } from './Country'
import './Countries.scss'

export const Countries = (props) => (
  <div className='countries'>
    <ul className='country-list'>
      {listCountries(props.countries)}
    </ul>
  </div>
)

function listCountries (countries) {
  return countries.map((country) =>
    <li key={country.name}><Country country={country} /></li>
  )
}

Countries.propTypes = {
  countries       : PropTypes.array.isRequired
}

export default Countries
