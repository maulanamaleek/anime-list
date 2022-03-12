/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { ANIME_DETAIL } from '../../utils/gql-helpers';
import Tag from '../../components/Tag/Tag';

const AnimeDetail = () => {
  const { id } = useParams();
  const { data } = useQuery(ANIME_DETAIL, {
    variables: {
      id,
      isAdult: false,
    },
  });
  const [detail, setDetail] = useState<any>({});

  useEffect(() => {
    console.log(data);
    setDetail(data?.Media);
  }, [data]);

  return (
    <Layout>
      <img
        style={{
          zIndex: -1,
          height: 300,
          width: '100%',
          borderRadius: 5,
        }}
        src={detail?.bannerImage}
        alt={detail?.title?.userPreferred}
      />

      <div>
        <Box sx={{
          display: 'flex',
          columnGap: 5,
          padding: '0 50px',
          mt: 2,
        }}
        >
          <div style={{
            transform: 'translate(0px, -100px)',
          }}
          >
            <img
              style={{
                height: 300,
                width: 200,
                borderRadius: 5,
              }}
              src={detail?.coverImage?.large}
              alt="1"
            />
            <br />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                background: 'darkBlue',
                color: 'white',
                outline: 0,
                border: 0,
                borderRadius: 1,
                padding: '5px 12px;',
                margin: 'auto',
                mt: 2,
              }}
              component="button"
            >
              Add to Favorite
              <FavoriteIcon sx={{ ml: 1 }} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                columnGap: '5px',
                rowGap: '5px',
                mt: 1,
              }}
            >
              {detail?.genres?.map((genre: string) => <Tag key={genre} content={genre} />)}
            </Box>
          </div>
          <div>
            <h1 style={{ marginBottom: 30 }}>{detail?.title?.userPreferred}</h1>
            <div dangerouslySetInnerHTML={{ __html: String(detail?.description) }} />
          </div>
        </Box>
        <div>
          <h1 style={{ marginTop: 30, marginBottom: 20 }}>Characters</h1>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            {detail?.characterPreview?.edges?.map((char: any) => (
              <Box>
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
        </div>
      </div>
    </Layout>
  );
};

export default AnimeDetail;
