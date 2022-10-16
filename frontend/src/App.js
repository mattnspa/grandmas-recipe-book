import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import banner from "./components/banner.png"
import { NavbarComponent } from "./components/navbar";
import { HomePage } from "./pages/home";
import { InfoPage } from "./pages/info";
import { RecipePage } from "./pages/recipe";
import { AllRecipesPage } from "./pages/allRecipes";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [slug, setSlug] = useState("");
  const [activeRoute, setActiveRoute] = useState("");
  const location = useLocation();


  useEffect(() => {
    setSlug(searchQuery)
  },[searchQuery]);  
    
  useEffect(() => {
    setActiveRoute(location.pathname)
  },[location.pathname]);

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
      <NavbarComponent activeRoute={activeRoute} setActiveRoute={setActiveRoute} submitButton={submitButton}/>
      <Container className="w-50 pt-3">
        <Image src={banner} fluid />
      </Container>
      <Routes>
        <Route path="/" element={<HomePage setActiveRoute={setActiveRoute} />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/recipes" element={<AllRecipesPage pageChange={pageChange} slug={slug} />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
