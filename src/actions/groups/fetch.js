import ApiClient from '../../api/client'
import { APP_LOADING, APP_DONE_LOADING, LOAD_ERROR, LOAD_SUCCESS } from '../loading'
export const FETCHED_GROUPS = 'FETCHED_GROUPS'

const api = new ApiClient()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get('/groups')
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_GROUPS,
          payload: result.body
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}