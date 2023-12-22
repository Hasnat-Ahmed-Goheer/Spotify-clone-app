export const musicInitialState = {
  musicItem: null,
  playState: null,
};

export const musicReducer = (state, action) => {
  switch (action.type) {
    case "SET_MUSIC":
      return { ...state, musicItem: action.musicItem };
    case "SET_PLAY_STATE":
      return { ...state, playState: action.playState };
    default:
      return state;
  }
};
