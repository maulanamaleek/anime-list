import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import { ANIME_DETAIL } from '../../utils/gql-helpers';
import {
  getLocalFavorites, isFavorite, removeFavorite, setLocalFavorites,
} from '../../utils/local-storage';
import useSkeleton from '../../components/Skeletons/useSkeleton';
import { Anime } from '../../models/anime';
import BannerSection from './BannerSection';

const AnimeDetail = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [detail, setDetail] = useState<Anime>({} as Anime);
  const [isFavoriteItem, setIsFavoriteItem] = useState(false);
  const { loadSkeletonCard } = useSkeleton();
  const { id } = useParams();
  const { data } = useQuery(ANIME_DETAIL, {
    variables: {
      id,
      isAdult: false,
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    setDetail(data?.Media);
    setIsFavoriteItem(isFavorite(data?.Media?.id));
  }, [data]);

  const addToFavorite = () => {
    const favorites = getLocalFavorites();
    const newFavorite = [{ ...data?.Media }];
    if (favorites) newFavorite.push(...favorites);

    setLocalFavorites(newFavorite);
    setIsFavoriteItem(true);
  };

  const removeFavoriteItem = () => {
    setIsFavoriteItem(false);
    removeFavorite(detail?.id!);
  };

  return (
    <Layout>
      <BannerSection
        detail={detail}
        removeFavoriteItem={removeFavoriteItem}
        addToFavorite={addToFavorite}
        isFavoriteItem={isFavoriteItem}
      />
      <div>
        {detail?.trailer?.site === 'youtube' && (
          <Box
            sx={{
              mt: 2,
              padding: isMobile ? '0 20px' : '0px',
            }}
          >
            <h1 style={{ marginBottom: '15px', textAlign: isMobile ? 'center' : 'left' }}> Trailer</h1>
            {detail?.trailer?.site === 'youtube' ? (
              <iframe
                title={detail?.title?.userPreferred}
                src={`https://www.youtube.com/embed/${detail?.trailer?.id}`}
                width={isMobile ? '250px' : '500px'}
                height={isMobile ? '200px' : '300px'}
                style={{
                  margin: isMobile ? 'auto' : 'initial',
                  display: 'block',
                }}
              />
            ) : null}
          </Box>
        )}
        <Box
          sx={{
            mt: 2,
            padding: isMobile ? '0 20px' : '0px',
          }}
        >
          <h1 style={{ marginTop: 30, marginBottom: 20, textAlign: isMobile ? 'center' : 'left' }}>Characters</h1>
          {detail ? (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'space-around',
              }}
            >
              {detail?.characterPreview?.edges?.map((char: any) => (
                <Box key={char.id}>
                  <img
                    style={{
                      display: 'block',
                      borderRadius: '10px',
                      height: 200,
                    }}
                    src={char.node.image.large}
                    alt={char.node.name.userPreferred}
                  />
                  <p>{char.node.name.userPreferred}</p>
                </Box>
              ))}
            </Box>
          ) : loadSkeletonCard(5)}
        </Box>
      </div>
    </Layout>
  );
};

export default AnimeDetail;
