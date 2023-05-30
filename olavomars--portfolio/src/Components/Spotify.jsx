import React, {useState, useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const Spotify = () => {
  const [spotifyToken, setSpotifyToken] = useState('');
  const [nowPlaying, setNowPlaying] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log('this is what I derived from the URL', getTokenFromUrl());
    const spotifyToken = getTokenFromUrl().access_token;
    window.location.hash = '';
    console.log('this is our spotify token ' + spotifyToken);

    if (spotifyToken) {
      setSpotifyToken(spotifyToken);
      spotifyApi.setAccessToken(spotifyToken);
      spotifyApi.getMe().then((user) => {
        console.log(user);
      });
      setLoggedIn(true);
    }
  });

  const getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      console.log(response);
      setNowPlaying({
        name: response.item.name,
        albumArt: response.item.album.images[0].url,
      });
    });
  };

  return (
    <div>
      {!loggedIn && (
        <>
          <a href='http://localhost:8888'>login</a>
          <button onClick={getNowPlaying()}>getNowPlaying</button>
        </>
      )}
      {loggedIn && (
        <>
          <div>Now playing: {nowPlaying.name}</div>
          <div>
            <img src={nowPlaying.image} style='height: 150px' />
          </div>
        </>
      )}
    </div>
  );
};
