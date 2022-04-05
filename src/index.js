import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import "./index.css";
import SharedLayout from "./components/SharedLayout";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<App />} />
        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <main
              style={{
                marginTop: "2rem",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
