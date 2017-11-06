import axios from 'axios';


const API_URL = 'http://localhost:3001';
const APP_HEADER = { headers: { 'Authorization': 'LateRndPick', 'Content-Type': 'application/json'}}


//categories
export function getAllCategories(){
  return axios.get(API_URL + "/categories", APP_HEADER)
}