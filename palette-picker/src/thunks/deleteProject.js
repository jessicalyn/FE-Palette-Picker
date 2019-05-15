import { hasError } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const deleteProject = (id) => {
  return async (dispatch) => {
    const url = `https://palette-picker-mfjk.herokuapp.com/api/v1/projects/${id}`
    try {
      const options = fetchOptionsCreator('DELETE')
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}
