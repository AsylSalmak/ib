export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState =  {
  username: "",
  email: "",
  name: "",
  surname: "",
  logedIn: false,
};

const init_state = userFromStorage || initialState 

export default (state = init_state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload, logedIn: true };

    case SIGN_OUT:
      return { ...initialState, logedIn: false};

    default:
      return state;
  }
};
