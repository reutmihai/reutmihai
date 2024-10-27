import { useState } from 'react'
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Navbar } from './Navbar/Navbar';
import '../components/App.css';
import { ImageBackground } from './ImageBackground/ImageBackground';

function App() {

  return (

    <div className='container'>
      <Navbar />
      <div className='flexbox'>
      <AboutMe />
      <ImageBackground />
      </div>
    </div>
  )
}

export default App
