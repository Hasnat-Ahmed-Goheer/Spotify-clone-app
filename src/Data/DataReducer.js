export const initialState = {
  user: null,
  playing: false,
  item: null,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
