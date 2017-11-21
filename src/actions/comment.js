import * as api from '../utils/api';

//action creators list
import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from './types'

// ACTION CREATORS
export function loadCommentsById(postId){
  return function (dispatch){
    return api.getCommentsById(postId).then(response => {
      if(response){
        dispatch(getComments(postId, response.data))
      }
    })
  }
}

export function addCommentVote(commentId){
  return function (dispatch){
    return api.incrementCommentVote(commentId).then(response =>{
      if(response){
        dispatch(updateComment(response.data))
      }
    })
  }
}

export function subtractCommentVote(commentId){
  return function (dispatch){
    return api.decrementCommentVote(commentId).then(response => {
      if (response){
        return dispatch(updateComment(response.data))
      }
    })
  }
}


 








// ACTIONS
export function getComments(postId, comments){
  return {
    type: GET_COMMENTS,
    comments: comments,
    postId: postId
  }
}

export function updateComment(comment){
  return {
    type: UPDATE_COMMENT,
    comment: comment,
    postId: comment.parentId
  }
}