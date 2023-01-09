import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import ToDo from "./pages/ToDo";
import Weather from "./pages/Weather";

function App() {
  const Rute = (
    <>
      <Router>
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/" element={<ToDo />} />
        </Routes>
      </Router>
    </>
  );
  return Rute;
}

export default App;
