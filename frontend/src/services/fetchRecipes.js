import { useState } from "react";
import axios from 'axios';

const BASE_URL = 'http://localhost:9000';

export const FetchRecipes = async () => {
  const results = await axios(`${BASE_URL}/api/recipes`)
  console.log("fetch:", results.data);
  return results.data;
}