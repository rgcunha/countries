import React from 'react'
import PropTypes from 'prop-types'
import './SearchBar.scss'

export const SearchBar = (props) => (
  <div className="search-bar">
    <button onClick={props.fetch} className="btn btn-primary">Fetch!</button>
  </div>
)

SearchBar.propTypes = {
  fetch    : PropTypes.func.isRequired,
}

export default SearchBar
