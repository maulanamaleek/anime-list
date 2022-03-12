import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeList from './pages/AnimeList/AnimeList';
import AnimeDetail from './pages/AnimeDetail/AnimeDetail';
import Discover from './pages/Discover/Discover';
import Favorites from './pages/Favorites/Favorites';
import Manga from './pages/Discover/Manga';

const App = () => (

  <Router>
    <Routes>
      <Route path="/anime/:id/:title" element={<AnimeDetail />} />
      <Route path="/manga/:id/:title" element={<AnimeDetail />} />
      <Route path="/character/:id/:title" element={<AnimeDetail />} />
      <Route path="/discover/manga" element={<Manga />} />
      <Route path="/discover/:type" element={<Discover />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<AnimeList />} />
    </Routes>
  </Router>
);

export default App;
