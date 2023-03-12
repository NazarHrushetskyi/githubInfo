import axios from 'axios';

export const INFO_USER = 'infoUser';

export const fetchUsers = (id) => {
    return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${id}`);
      dispatch({
        type: INFO_USER,
        payload: data});
    } catch (error) {
      console.log('API error:', error);
      alert('Помилка під час отримання користувачів(');
    }
  }
}