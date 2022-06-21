import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Repo from "pages/repo";

function App() {
  const [repos, setRepos] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/repos" element={<Repo repos={repos} />} />
        <Route path="/" element={<Home setRepos={setRepos} />} />
      </Routes>
    </Router>
  );
}

export default App;
