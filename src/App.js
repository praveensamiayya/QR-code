import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Qr from "./Components/Qr";
import SearchEmployee from "./Components/SearchEmployee";
import BookFlipBrochure from "./Components/Bookflip";
import LoginPage from "./Components/login";
import Dashboard from "./Components/dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Qr />} />
        <Route path="/search-employee" element={<SearchEmployee />} />
        <Route path="/brochure" element={<BookFlipBrochure />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash" element={<Dashboard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

