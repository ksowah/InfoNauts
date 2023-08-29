const actionTypes = {
  SET_CHEQUE: "SET_CHEQUE"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CHEQUE:
      return {
        ...state,
        cheque: action.playload,
      };
    default:
      return state;
  }
};

export default reducer;