import React from 'react'
import PropTypes from 'prop-types'
import './Country.scss'

export const Country = (props) => (
  <div className='country'>
    <div className='row'>
      <div className='col col-md-2'>
        <img src={props.country.flag} className='country__flag' />
      </div>
      <div className='col col-md-10'>
        <h2>{props.country.name}</h2>
        <p>Population: {props.country.population}</p>
        <p>Area: {props.country.area}</p>
      </div>
    </div>
  </div>
)

Country.propTypes = {
  country     : PropTypes.object.isRequired
}

export default Country
