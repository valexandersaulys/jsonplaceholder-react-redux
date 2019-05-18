import {
  GET_POSTS,
  POSTS_LOADED,
  POSTS_FAILED
} from '../actions/types';

const initialState = {
  posts: [{title:'', body:'loading...'}],
  loading: false,
  loaded: false,
  failure: false
};

export default function(state=initialState, action) {
  switch(action.type) {
  case GET_POSTS:
    return {
      ...state,
      loading: true
    };
  case POSTS_LOADED:
    return {
      ...state,
      loading: false,
      loaded: true,
      posts: action.payload
    };
  case POSTS_FAILED:
    return {
      ...state,
      loading: false,
      failure: true
    };
  default:
    return state;
  }
};
