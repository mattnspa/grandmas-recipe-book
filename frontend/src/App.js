import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom"

import { NavbarComponent } from "./components/navbar";
import { HomePage } from "./pages/home";
import { InfoPage } from "./pages/info";
import { RecipePage } from "./pages/recipe";
import { AllRecipesPage } from "./pages/allRecipes";
import { FetchRecipe } from './services/fetchRecipes';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentRequestUrl, setCurrentRequestUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const results = await FetchRecipe();
      setRecipes(results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const pageChange = async (pageRequestSlug) => {
    setLoading(true);
    const createdSlug = `${currentRequestUrl}${pageRequestSlug}`
    const sanitizedSlug = createdSlug
      // replace all '?' with '&'
      .replace(/[?]/g,'&')
      // replace first '&' with '?'
      .replace('&','?');

    setRecipes(await FetchRecipe(sanitizedSlug));
    setLoading(false);
  };

  const submitButton = async (query) => {
    if (query) {
      setLoading(true);
      const results = await FetchRecipe(`/search?q=${query}`);
      setCurrentRequestUrl(`/search?q=${query}`);
      setRecipes(results);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <NavbarComponent location={location.pathname} submitButton={submitButton}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/recipes" element={<AllRecipesPage recipes={recipes} isLoading={isLoading} pageChange={pageChange}/>} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
