import "./App.css";
import SearchPage from "./routes/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterPage from "./routes/CharacterPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Have the root, as the search element */}
        <Route path={"/"} element={<SearchPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
