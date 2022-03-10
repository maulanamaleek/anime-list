import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeList from './pages/AnimeList/AnimeList';
import AnimeDetail from './pages/AnimeDetail/AnimeDetail';
import Discover from './pages/Discover/Discover';
import Favorites from './pages/Favorites/Favorites';

const App = () => (
  <Router>
    <Routes>
      <Route path="/detail/:id/:title" element={<AnimeDetail />} />
      <Route path="/discover/:type" element={<Discover />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<AnimeList />} />
    </Routes>
  </Router>
);

export default App;
