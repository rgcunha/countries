import { connect } from 'react-redux'
import { fetchCountries } from '../modules/countries'
import FilterableCountries from '../components/FilterableCountries'

const mapDispatchToProps = {
  fetchCountries
}

const mapStateToProps = (state) => ({
  countries : state.countries
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterableCountries)
