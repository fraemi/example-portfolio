import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  Intro,
  About,
  Blogs,
  Contact,
  Footer,
  Timeline,
  Services,
  Skills,
  LatestWorks,
} from './components';
import { AlertProvider } from './context/alertContext';
import AlertMessage from './components/Alert';

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <Navbar />
        <Intro />
        <About />
        <Services />
        <LatestWorks />
        <Contact />
        <Skills />
        <Timeline />
        <Blogs />
        <Footer />
        <AlertMessage />
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
