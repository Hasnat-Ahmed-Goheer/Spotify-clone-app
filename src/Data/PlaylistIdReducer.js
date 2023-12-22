export const playlistIdInitialState = {
  id: "37i9dQZEVXcI8s6ltqTt2X",
};

export const playlistIdReducer = (state, action) => {
  switch (action.type) {
    case "SET_ID":
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};
