import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom"

import { NavbarComponent } from "./components/navbar";
import { HomePage } from "./pages/home";
import { InfoPage } from "./pages/info";
import { RecipePage } from "./pages/recipe";
import { AllRecipesPage } from "./pages/allRecipes";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [slug, setSlug] = useState("");
  const location = useLocation();

  useEffect(() => {
      setSlug(searchQuery)
    },[searchQuery]);

  const submitButton = (submittedQuery) => {
    setSearchQuery(`/search?q=${submittedQuery}`);
  };
  const pageChange = (pageRequestSlug) => {
    const createdQuery = `${searchQuery}${pageRequestSlug}`
    const sanitizedQuery = createdQuery
      // replace all '?' with '&'
      .replace(/[?]/g,'&')
      // replace first '&' with '?'
      .replace('&','?');

    setSlug(sanitizedQuery);
  };

  return (
    <div className="App">
      <NavbarComponent location={location.pathname} submitButton={submitButton}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/recipes" element={<AllRecipesPage pageChange={pageChange} slug={slug} />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
