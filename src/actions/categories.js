import * as api from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';


//action creator w/ api call nested
// also because we are using redux thunk we can return a function(dispatch )
export function loadAllCategories(){
  return function(dispatch){
    return api.getAllCategories().then( response => {
      if(response){
        dispatch(getCategories(response.data.categories))
      }
    })
  }
};


//action (note the type property on the object)
export function getCategories(categories){
  return{
    type: GET_CATEGORIES,
    categories: categories
  }
}