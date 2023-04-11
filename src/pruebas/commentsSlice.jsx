import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: [] 
  },
  reducers: {
    setCommentsList: (state, action) => {
      state.list = action.payload; 
    }
  }
});

export const { setCommentsList } = commentsSlice.actions;

export default commentsSlice.reducer;

export const getCommentsList = () => {
  return async function (dispatch) {
    axios.get('http://localhost:3001/comment')
      .then(r => r.data)
      .then(response => {
        dispatch(setCommentsList(response));
        console.log("aca esta fallando",response.data)
      }).catch(error => console.log(error));
  };
};
