export const playlistInitialState = {
  playlist: [],
};

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    default:
      return state;
  }
};
