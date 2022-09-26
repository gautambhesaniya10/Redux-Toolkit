import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  color : "",
  bgColor : ""
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState : initialStateValue,
  reducers: {
    changeTextColor : (state, action) => {
      state.color =  action.payload
    },
    changebgColor : (state , action) => {
        state.bgColor = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTextColor , changebgColor } = themeSlice.actions

export default themeSlice.reducer