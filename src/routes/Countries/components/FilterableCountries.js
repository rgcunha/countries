import React from 'react'
import PropTypes from 'prop-types'
import { Countries } from './Countries'
import { SearchBar } from './SearchBar'

class FilterableCountries extends React.Component {
  componentWillMount() {
    this.props.fetchCountries();
  }

  render() {
    return (
      <div className="filterable-countries">
        <h1>Countries</h1>
        <SearchBar fetch={this.props.fetchCountries}></SearchBar>
        <Countries countries={this.props.countries}></Countries>
      </div>
    )
  }
}

FilterableCountries.propTypes = {
  fetchCountries    : PropTypes.func.isRequired,
  countries         : PropTypes.array.isRequired
}

export default FilterableCountries
