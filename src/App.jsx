import React from 'react';
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";
import "./App.css"
const App = () => {
  return (
    <div>
          <Navbar/>
          <NewsBoard/>
          <Footer/>
    </div>
  )
}

export default App
