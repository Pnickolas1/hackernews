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
        dispatch(addComment(response.data))
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

export function addNewComment(comment){
  return function (dispatch ){
    return api.createComment(comment).then(response => {
      if(response){
        return dispatch(updateComment(response.data))
      }
    })
  }
}
 
export function editComment(comment){
  return function (dispatch){
    return api.updateComment(comment).then(response => {
      if(response){
        return dispatch(updateComment(response.data))
      }
    })
  }
}

export function removeComment(comment){
  return function (dispatch){
    return api.updateComment(comment).then(response => {
      if (response){
        return dispatch(deleteComment(response.data))
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

export function deleteComment(comment){
  return {
    type: DELETE_COMMENT,
    comment: comment.id,
    postId: comment.parentId
  }
}

export function addComment(comment){
  return{
    type: ADD_COMMENT,
    comment: comment,
    postId: comment.parentId
  }
}