import { Routes, Route } from "react-router-dom"

import { NavbarComponent } from "./components/navbar";
import { HomePage } from "./pages/home";
import { InfoPage } from "./pages/info";
import { RecipePage } from "./pages/recipe";
import { AllRecipesPage } from "./pages/allRecipes";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="App">
      <NavbarComponent handleClick={changeTheme} darkTheme={darkTheme}/>
      <Routes>
        <Route path="/" element={<HomePage darkTheme={darkTheme}/>} />
        <Route path="/info" element={<InfoPage darkTheme={darkTheme} />} />
        <Route path="/recipes" element={<AllRecipesPage darkTheme={darkTheme} />} />
        <Route path="/recipes/:id" element={<RecipePage darkTheme={darkTheme} />} />
      </Routes>
      
    </div>
  );
}

export default App;
