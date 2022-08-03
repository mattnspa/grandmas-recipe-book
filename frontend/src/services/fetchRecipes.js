import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const FetchRecipe = async (id) => {
  id = id || ""
  const results = await axios(`${BASE_URL}/api/recipes/${id}`)
  return results.data;
}