import './App.css'
import SearchPage from './routes/SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Have the root, as the search element */}
        <Route path={"/"} element={<SearchPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
