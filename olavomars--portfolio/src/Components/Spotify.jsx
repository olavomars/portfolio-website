import React, { useEffect, useState } from 'react';

export const Spotify = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${
        import.meta.env.VITE_SPOTIFY_USER
      }&api_key=${
        import.meta.env.VITE_SPOTIFY_API_KEY
      }&limit=2&nowplaying=true&format=json`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then((data) => setData(data))
      .catch(() =>
        setData({ error: 'Whoops! Something went wrong with Last.fm' })
      );
  }, []);

  if (data.recenttracks) {
    return (
      <div className='spotify-card'>
        <div className='spotify-container'>
          <img
            className='spotify-song-image'
            src={data.recenttracks.track[0].image[2]['#text']}
          />
          <div className='spotify-text-container'>
            <div className='spotify-logo-playing'>
              <img className='spotify-logo' src='/Assets/spotify-icon.svg' />
              <div className='spotify-now-playing'>
                <div className='spotify-playing-indicator-container'>
                  <div
                    className='playing-indicator-line'
                    style={{ animation: 'playing 0.85s infinite ease' }}
                  ></div>
                  <div
                    style={{ animation: 'playing 1.6s infinite ease' }}
                    className='playing-indicator-line'
                  ></div>
                  <div
                    style={{ animation: 'playing 1.3s infinite ease' }}
                    className='playing-indicator-line'
                  ></div>
                  <h4 className='spotify-last-played'>Last played</h4>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h3 className='spotify-song-name'>
                {data.recenttracks.track[0].name}
              </h3>
              <p className='spotify-song-artist'>
                {data.recenttracks.track[0].artist['#text']}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
