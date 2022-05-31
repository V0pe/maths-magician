import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Math Magician!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
