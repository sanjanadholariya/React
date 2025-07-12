// src/redux/action/AuthAction.js
export const REGISTER_USER = (formData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "AUTH_ERROR", payload: err });
    }
  }
}

export const LOGIN_USER = (formData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`);
      const data = await res.json();
      if (data.length > 0) {
        dispatch({ type: "LOGIN_SUCCESS", payload: data[0] });
        localStorage.setItem("loginUser", JSON.stringify(data[0]));
      } else {
        alert("Invalid Credentials");
        dispatch({ type: "AUTH_ERROR", payload: "Invalid Credentials" });
      }
    } catch (err) {
      dispatch({ type: "AUTH_ERROR", payload: err });
    }
  }
}

export const LOGOUT_USER = () => {
  return (dispatch) => {
    localStorage.removeItem("loginUser");
    dispatch({ type: "LOGOUT" });
  };
}
