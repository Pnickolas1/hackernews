import axios from 'axios';


const API_URL = 'http://localhost:3001';
const APP_HEADER = { headers: { 'Authorization': 'LateRndPick', 'Content-Type': 'application/json'}}


//categories
export function getAllCategories(){
  return axios.get(API_URL + "/categories", APP_HEADER)
}

//posts
export function getAllPosts(){
  return axios.get(API_URL+"/posts", APP_HEADER)
}