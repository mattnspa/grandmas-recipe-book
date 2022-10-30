import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

/**
 * Fetch recipes from endpoint @param {slug}
 * @param {string} slug 
 * @returns 
 */
export const FetchRecipe = async (slug,controller,setLoading,setRecipes,setError) => {
  slug = slug || ""
  axios(`${BASE_URL}/api/recipes${slug}`,{signal: controller.signal})
    .then(res => {
      setError(false);
      setRecipes(res.data)
      setLoading(false);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
}