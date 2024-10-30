import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Homepage } from "../components/Homepage/Homepage";
import { InfoAboutMe } from "./InfoAboutMe/InfoAboutMe";
import SharedLayout from "../pages/SharedLayout";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectListPage from "../pages/ProjectListPage/ProjectListPage";
import "../components/App.css";

function App() {
  return (
    <BrowserRouter basename="/reutmihai/">
      <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="projects" element={<ProjectListPage />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
