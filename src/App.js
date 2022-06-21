import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Repo from "pages/repo";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(10);

  return (
    <Router>
      <Routes>
        <Route
          path="/repos"
          element={
            <Repo
              repos={repos}
              setRepos={setRepos}
              loading={loading}
              setLoading={setLoading}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              setRepos={setRepos}
              setLoading={setLoading}
              setTotal={setTotal}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
