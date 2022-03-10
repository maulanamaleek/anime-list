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
    color: black;
  }
`;

interface Props {
  imageUrl: string;
  title: string;
  genres: Array<string>;
}

const AnimeCard = ({ imageUrl, title, genres }: Props) => (
  <Card>
    <img src={imageUrl} alt={title} />
    <p>{title}</p>
    <p>
      Genre:
      {genres.map((genre) => <span key={genre}>{genre}</span>)}
    </p>
  </Card>
);

export default AnimeCard;
