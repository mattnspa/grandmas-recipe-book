import { Routes, Route } from "react-router-dom"

import { NavbarComponent } from "./components/navbar";
import { HomePage } from "./pages/home";
import { InfoPage } from "./pages/info";
import { RecipePage } from "./pages/recipe";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
      
    </div>
  );
}

export default App;