export const SET_ACCOUNTS = "SET_ACCOUNTS";

const initialState = {
  accounts: {},
  accountsFetched: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return { ...state, accounts: action.payload, accountsFetched: true };

    default:
      return state;
  }
};
