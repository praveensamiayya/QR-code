import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Qr from "./Components/Qr";
import SearchEmployee from "./Components/SearchEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Qr />} />
        <Route path="/search-employee" element={<SearchEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;

