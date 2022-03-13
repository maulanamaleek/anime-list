import { Box, Skeleton, useMediaQuery } from '@mui/material';
import React from 'react';
import DOMPurify from 'dompurify';
import Tag from '../../components/Tag/Tag';
import ArticleSkeleton from '../../components/Skeletons/ArticleSkeleton';
import { Anime } from '../../models/anime';

interface BannerSectionProps {
  detail: Anime;
  isFavoriteItem: boolean;
  removeFavoriteItem: Function;
  addToFavorite: Function;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  detail, isFavoriteItem, removeFavoriteItem, addToFavorite,
}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box>
      {detail?.bannerImage ? (
        <img
          style={{
            zIndex: -1,
            height: 300,
            width: '100%',
            borderRadius: 5,
            objectFit: 'cover',
          }}
          src={detail?.bannerImage}
          alt={detail?.title?.userPreferred}
        />
      ) : (
        <Skeleton
          variant="rectangular"
          height={300}
          sx={{ zIndex: -1, borderRadius: 1 }}
        />
      )}

      <div>
        {detail ? (
          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : '',
            columnGap: 5,
            padding: isMobile ? '0 10px' : '0 50px',
            mt: 2,
          }}
          >
            <div style={{
              transform: 'translate(0px, -100px)',
            }}
            >
              <img
                style={{
                  height: isMobile ? 170 : 300,
                  width: isMobile ? 120 : 200,
                  borderRadius: 5,
                  margin: 'auto',
                  display: 'block',
                }}
                src={detail?.coverImage?.large}
                alt={detail?.title?.userPreferred}
              />
              <br />
              {isFavoriteItem ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'transparent',
                    cursor: 'pointer',
                    color: 'red',
                    margin: 'auto',
                    mt: 2,
                  }}
                  component="button"
                  onClick={() => removeFavoriteItem()}
                >
                  Remove Favorite

                </Box>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#52b69a',
                    color: 'white',
                    outline: 0,
                    border: 0,
                    borderRadius: 1,
                    padding: '5px 12px;',
                    margin: 'auto',
                    mt: 2,
                  }}
                  component="button"
                  onClick={() => addToFavorite()}
                >
                  Add to Favorite +
                </Box>
              )}

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  columnGap: '5px',
                  rowGap: '5px',
                  mt: 1,
                }}
              >
                {detail?.genres?.map((genre: string) => <Tag key={genre} content={genre} />)}
              </Box>

              <Box sx={{ fontSize: '14px', mt: 1, textAlign: isMobile ? 'center' : 'left' }}>
                <p>
                  <b>Average Score: </b>
                  {detail?.averageScore}
                  {detail?.averageScore ? '%' : '-'}
                </p>
                <p>
                  <b>Start at:</b>
                  &nbsp;
                  {detail?.startDate?.day ? `${detail?.startDate?.day}-${detail?.startDate?.month}-${detail?.startDate?.year}`
                    : '-'}

                </p>
                <p>
                  <b>End at: </b>
                  {detail?.endDate?.day ? `${detail?.endDate?.day}-${detail?.endDate?.month}-${detail?.endDate?.year}`
                    : '-'}
                </p>
              </Box>
            </div>
            <div>
              <h1 style={{ marginBottom: 30 }}>{detail?.title?.userPreferred}</h1>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(detail?.description)),
                }}
              />
            </div>
          </Box>
        ) : <ArticleSkeleton />}
      </div>
    </Box>
  );
};

export default BannerSection;
