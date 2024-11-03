import { createSlice } from '@reduxjs/toolkit';

const initSlice = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initSlice,
  reducers:{
    toggleTheme:(state) => {
        state.mode = state.mode == 'dark' ? 'dark' : 'light';
      },
    setTheme: (state, action) => {
        state.mode = action.payload;
      },
  } 
});

export const {toggleTheme,setTheme} = themeSlice.actions;
export default themeSlice.reducer
