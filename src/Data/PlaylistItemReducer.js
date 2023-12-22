export const playlistItemInitialState = {
  playlistItem: null,
};

export const playlistItemReducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYLIST_ITEM":
      return {
        ...state,
        playlistItem: action.playlistItem,
      };
    default:
      return state;
  }
};
