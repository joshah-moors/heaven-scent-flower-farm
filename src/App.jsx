import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
      {/* <Team data={landingPageData.Team} /> */}
      {/*<Services data={landingPageData.Services} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
    </div>
  );
};

export default App;
