import Box from '@mui/material/Box';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Layout from '../../components/Layout/Layout';

const AnimeDetail = () => (
  <Layout>
    <img
      style={{
        zIndex: -1,
        height: 300,
        width: '100%',
        borderRadius: 5,
      }}
      src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/131681-1UVaTTG5PaZs.jpg"
      alt="bacg"
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
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131681-ODIRpBIbR5Eu.jpg"
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
        </div>
        <div>
          <h1 style={{ marginBottom: 30 }}>Shingeki no Kyojin: The Final Season Part 2</h1>
          <p>
            The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control.
            After taking a huge blow from a surprise attack led by Eren, Marley swiftly acts to
            returnthe favor. With Zeke’s true plan revealed and a military forced under new rule,
            this battle might be fought on two fronts. Does Eren intend on fulfilling his
            half-brother’s wishes or does he have a plan of his own?
          </p>
        </div>
      </Box>
      <div>
        <h1 style={{ marginTop: 30, marginBottom: 20 }}>Characters</h1>
        <div>
          <p>Eren Jeger</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default AnimeDetail;
