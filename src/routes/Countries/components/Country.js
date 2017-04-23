import React from 'react'
import PropTypes from 'prop-types'
import './Country.scss'

export const Country = (props) => (
  <div className="country">
    <div className="row">
      <div className="col col-md-4">
        <img src={props.country.image}/>
      </div>
      <div className="col col-md-8">
        <h1>{props.country.name}</h1>
        <label>Population: {props.country.population}</label>
        <label>Area: {props.country.area}</label>
      </div>
    </div>
  </div>
)

Country.propTypes = {
  country     : PropTypes.object.isRequired,
}

export default Country
