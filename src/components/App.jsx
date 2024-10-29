import { useState } from 'react'
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Navbar } from './Navbar/Navbar';
import '../components/App.css';
import { Image } from './Image/Image';
import { InfoAboutMe } from './InfoAboutMe/InfoAboutMe';
import TypingAnimation from './TypingAnimation/TypingAnimation';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="flexbox">
          <AboutMe />
          <Image />
        </div>
        <InfoAboutMe />
      </div>
    </BrowserRouter>
  );
}

export default App
