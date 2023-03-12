import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (params) => {
  const { sortBy, search, currentPage } = params;
  const { data } = await axios.get(
    `https://api.github.com/search/users?q=a&page=${currentPage}&limit=9&${sortBy}&${search}`,
  );
  return data;
});

const initialState = {
    items: [],
    status: "loading",
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },

})


export const selectUserData = (state) => state.user;

export const { setItems }= userSlice.actions;

export default userSlice.reducer;