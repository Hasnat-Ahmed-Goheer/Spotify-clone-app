export const spotifyInitialState = {
  spotify: null,
};

export const SpotifyReducer = (state, action) => {
  switch (action.type) {
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};

