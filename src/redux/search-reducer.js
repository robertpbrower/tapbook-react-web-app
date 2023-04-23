import { createSlice } from "@reduxjs/toolkit";


const search = {
  searchStr: ""
}

const searchSlice = createSlice({
  name: 'search',
  initialState: search,
  reducers: {
    updateSearch(state, action) {
      state.searchStr = action.payload;
      console.log(`In Reducer ${state.searchStr}`)
    }
  }


});

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;