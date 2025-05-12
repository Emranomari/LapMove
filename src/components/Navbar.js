import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
    <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
    <Link to="/movies" style={{ color: 'white' }}>Movies</Link>
  </nav>
);

export default Navbar;
  