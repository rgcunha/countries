import React from 'react'
import { Country } from './Country'
import './Countries.scss'

const countries = [
  { name: "Portugal", image: "", population: "10 Million", area: "300" },
  { name: "Spain", image: "", population: "40 Million", area: "300" },
  { name: "France", image: "", population: "65 Million", area: "300" }
]

export const Countries = (props) => (
  <div className="countries">
    <h2>Countries</h2>
    <ul className="country-list">
      <li><Country country={countries[0]}></Country></li>
      <li><Country country={countries[1]}></Country></li>
      <li><Country country={countries[2]}></Country></li>
    </ul>
  </div>
)

export default Countries
