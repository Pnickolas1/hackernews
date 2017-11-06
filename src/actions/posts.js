import * as api from '../utils/api';

export const GET_POSTS = 'GET_POSTS'


export function loadPosts(){
  return function (dispatch){
    api.getAllPosts().then( response =>{
      if(response){
        //dispatch the action
        dispatch(getPosts(response.data))
      }
    })
  }
}


export function getPosts(posts){
  return{
    type: GET_POSTS,
    posts: posts.filter(post => post.deleted !== true)
  }
}