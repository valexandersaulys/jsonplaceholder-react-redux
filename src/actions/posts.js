import axios from 'axios';

import {
  GET_POSTS,
  POSTS_LOADED,
  POSTS_FAILED
} from './types';

export const getPosts = () => dispatch => {
  dispatch({
    type: GET_POSTS
  });

  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      dispatch({
        type: POSTS_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: POSTS_FAILED
      });
    });
}

