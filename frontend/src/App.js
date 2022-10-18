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
  const [activeRoute, setActiveRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname)
  },[location.pathname]);

  return (
    <div className="App">
      <NavbarComponent activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
      <Container className="w-50 pt-3">
        <Image src={banner} fluid />
      </Container>
      <Routes>
        <Route path="/" element={<HomePage setActiveRoute={setActiveRoute} />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/recipes" element={<AllRecipesPage />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
