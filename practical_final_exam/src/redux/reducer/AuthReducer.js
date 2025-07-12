// src/redux/reducer/AuthReducer.js
const initialState = {
  user: JSON.parse(localStorage.getItem("loginUser")) || null,
  error: null
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("loginUser", JSON.stringify(action.payload));
      return { ...state, user: action.payload, error: null };

    case "LOGOUT":
      localStorage.removeItem("loginUser");
      return { ...state, user: null };

    case "AUTH_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default AuthReducer;
