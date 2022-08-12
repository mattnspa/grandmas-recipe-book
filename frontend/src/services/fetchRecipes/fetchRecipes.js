import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/**
 * Fetch recipes from endpoint @param {slug}
 * @param {string} slug 
 * @returns 
 */
export const FetchRecipe = async (slug,controller) => {
  slug = slug || ""
  const result = await axios(`${BASE_URL}/api/recipes${slug}`,{signal: controller.signal})
    .then(res => {
      return res.data;
    })
    .catch((err) => {
      console.log(err)
    });
  return result;
}