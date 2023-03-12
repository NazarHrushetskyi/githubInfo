import axios from 'axios';

export const NEW_DATA = 'newData';
export const  getRepos = (id, sortBy, order) => {
    return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${id}/repos?per_page=8&sort=${sortBy}&order=${order}`,
      );
      dispatch({
        type:NEW_DATA,
        payload: data
      })
      /*
      setRepos(data);
      setDefaultRepos(data);*/
    } catch (error) {
      console.log('API error:', error);
    }
}
  }