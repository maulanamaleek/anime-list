import React from 'react';

const AnimeDetail = () => (
  <div>
    <img
      style={{
        // position: 'fixed',
        zIndex: -1,
        height: 300,
      }}
      src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/131681-1UVaTTG5PaZs.jpg"
      alt="bacg"
    />

    <div>
      <div style={{ display: 'flex', columnGap: 30 }}>
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
          <button type="button">Add to Favorite</button>
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
      </div>
      <div>
        <h1 style={{ marginTop: 30, marginBottom: 20 }}>Characters</h1>
        <div>
          <p>Eren Jeger</p>
        </div>
      </div>
    </div>
  </div>
);

export default AnimeDetail;
