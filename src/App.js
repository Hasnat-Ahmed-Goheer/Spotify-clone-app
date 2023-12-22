import React, { useEffect } from "react";
import LoginPage from "./Page/LoginPage/LoginPage";
import { getTokenFromResponse } from "./server/LoginAuth";
import { UseDataContext } from "./Data/DataProvider";
import { UseTokenContext } from "./Data/TokenProvider";
import { UseSpotifyContext } from "./Data/SpotifyProvider";
import SpotifyWebApi from "spotify-web-api-js";
import PlayerPage from "./Page/PlayerPage/PlayerPage";
import { usePlaylistContext } from "./Data/PlaylistProvider";
import { UsePlaylistItemContext } from "./Data/PlaylistItemProvider";
import { UsePlaylistIdContext } from "./Data/PlaylistIdProvider";
import "./app.css";

function App() {
  // const [token, setToken] = useState(null);
  const [{}, dispatch] = UseDataContext();
  const [{ token }, dispatchToken] = UseTokenContext();
  const [{}, dispatchPlaylist] = usePlaylistContext();
  const [{}, dispatchSpotify] = UseSpotifyContext();
  const [{}, dispatchPlaylistItem] = UsePlaylistItemContext();
  const [{ id }] = UsePlaylistIdContext();
  const spotify = new SpotifyWebApi();

  // get user function for the spotify API
  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      user,
    });
  };
  const setPlaylist = (playlist) => {
    dispatchPlaylist({
      type: "SET_PLAYLIST",
      playlist: playlist,
    });
  };
  const setPlaylistItem = (item) => {
    dispatchPlaylistItem({
      type: "SET_PLAYLIST_ITEM",
      playlistItem: item,
    });
  };

  useEffect(() => {
    const hash = getTokenFromResponse();
    const _token = hash.access_token;
    window.location.hash = "";

     dispatchSpotify({
       type: "SET_SPOTIFY",
       spotify: spotify,
     });

     const setAccessToken =  async () => {
          spotify.setAccessToken(_token);
          const response = await spotify.getMe();
          setUser(response);
        }
        
        
        const getUserPlaylists = async () => {
          const response = await spotify.getUserPlaylists();
          setPlaylist(response);
        }

        const getPlaylist = async () => {
          const response = await spotify.getPlaylist(id);
          setPlaylistItem(response);
        };

    if (_token) {
      setAccessToken();
      dispatchToken({
        type: "SET_TOKEN",
        token: _token,
      });
      getUserPlaylists();
      
    }
    
    if( token ) getPlaylist();

  }, [id,token]);

  return <>{token ? <PlayerPage /> : <LoginPage />}</>;
}

export default App;


// it is an IIFE function
// (function (a,b) { return a +b})();