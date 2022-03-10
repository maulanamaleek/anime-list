import styled from '@emotion/styled';
import React from 'react';

const Card = styled.div`
  display: block;
  width: 185px;
  margin: auto;
  border-radius: 5px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  p {
    font-size: 14px;
  }
`;

const AnimeCard = () => (
  <Card>
    <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/26-FWJgAONj7etr.jpg" alt="anime title" />
    <p>Anime Title</p>
    <p>Genre: Action...</p>
  </Card>
);

export default AnimeCard;
