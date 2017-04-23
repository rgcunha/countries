import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/countries'
import Countries from '../components/Countries'

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  countries : state.countries
})

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
