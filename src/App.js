import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';
import Navbar from './pages/Navbar';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<CalculatorPage />} />
          <Route exact path="quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
