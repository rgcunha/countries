import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const API_URL = 'https://restcountries.eu/rest/v2'

// ------------------------------------
// Actions
// ------------------------------------
export function fetchCountries () {
  return function (dispatch) {
    axios.get(`${API_URL}/all`)
    .then(response => {
      dispatch({
        type: FETCH_COUNTRIES,
        payload: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export const actions = {
  fetchCountries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_COUNTRIES] : (state, action) => state.concat(action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function countriesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
