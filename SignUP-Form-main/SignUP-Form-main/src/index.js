import React from "react";
import ReactDOM from "react-dom/client"; // ✅ updated for React 18
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "./Components/form-component";
import UserDetails from "./Components/UserDetails";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FormComponent />} />
      <Route path="/details" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
);
