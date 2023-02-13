import React from "react";
import Hero from "./Components/Hero";
import ImageSlider from "./Components/ImageSlider";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";
import Rooms from './Components/Rooms'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers /> 
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
