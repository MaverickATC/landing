import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRouts } from './routs';


import { Navbar } from './components/Navbar/Navbar'

function App() {
  const routs = useRouts();
  return (
    <BrowserRouter>
    <Navbar />
      {routs}
    </BrowserRouter>

  );
}

export default App;
