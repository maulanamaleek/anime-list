/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React from 'react';
import * as Sentry from '@sentry/react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeList from './pages/AnimeList/AnimeList';
import AnimeDetail from './pages/AnimeDetail/AnimeDetail';
import Discover from './pages/Discover/Discover';
import Favorites from './pages/Favorites/Favorites';
import Fallback from './components/Fallback/Fallback';

const App = () => (
  <Sentry.ErrorBoundary fallback={<Fallback />}>
    <Router>
      <Routes>
        <Route path="/anime/:id/:title" element={<AnimeDetail />} />
        <Route path="/manga/:id/:title" element={<AnimeDetail />} />
        <Route path="/discover/manga" element={<Discover type="MANGA" />} />
        <Route path="/discover/anime" element={<Discover type="ANIME" />} />
        <Route path="/discover/anime/:category" element={<Discover type="ANIME" />} />
        <Route path="/discover/manga" element={<Discover type="MANGA" />} />
        <Route path="/discover/manga/:category" element={<Discover type="MANGA" />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<AnimeList />} />

        <Route path="*" element={<Fallback />} />
      </Routes>
    </Router>
  </Sentry.ErrorBoundary>
);

export default App;
