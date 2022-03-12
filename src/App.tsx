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
      <Route path="/anime/:id/:title" element={<AnimeDetail />} />
      <Route path="/manga/:id/:title" element={<AnimeDetail />} />
      <Route path="/discover/manga" element={<Discover type="MANGA" />} />
      <Route path="/discover/anime" element={<Discover type="ANIME" />} />
      <Route path="/discover/anime/:category" element={<Discover type="ANIME" />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<AnimeList />} />
    </Routes>
  </Router>
);

export default App;
