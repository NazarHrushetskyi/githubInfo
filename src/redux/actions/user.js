import axios from 'axios';

export const DATA_USERS = 'dataUsers';
export const DATA_PAGES = 'dataPages';

export const  fetchUsers = (searchValue, currentPage) => {
    return async (dispatch) => {
    try {
      const search = searchValue ? `${searchValue}` : '';
      const { data } = await axios.get(
        `https://api.github.com/search/users?${
          search.length ? 'q=' + search + '&' : 'q=a' + '&'
        }page=${currentPage}&per_page=9`,   
      );
      dispatch({
        type: DATA_USERS,
        payload: {arrUser:data.items, page:currentPage} 
    });
    } catch (error) {
      console.log('API error:', error);
      alert('Помилка під час отримання користувачів(');
    }
}
  }

 