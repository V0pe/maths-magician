import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/CalculatorPage',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <header>
      <h1>Math Magician</h1>
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          )).reduce((acc, x) => (acc === null ? [x] : [acc, ' | ', x]), null)}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
