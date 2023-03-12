import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    searchValue: '',
    sort: {
        name: "alphabet",
        sortProperty: "title",
      },
}


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        }
    },
)


export const { setSearchValue, setSort } = filterSlice.actions;

export default filterSlice.reducer;