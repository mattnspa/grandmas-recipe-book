import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/**
 * Fetch recipes from endpoint @param {slug}
 * @param {string} slug 
 * @returns 
 */
export const FetchRecipe = async (slug) => {
  slug = slug || ""
  const results = await axios(`${BASE_URL}/api/recipes${slug}`)
  return results.data;
}