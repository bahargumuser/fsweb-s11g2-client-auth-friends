import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BeginForm = () => {
  const [loginUser, setLoginUser] = useState({});

  const history = useHistory();

  const login = () => {
    axios
      .post("http://localhost:9000/api/login", {
        username: loginUser.username,
        password: loginUser.password,
      })
      .then((res) => {
        localStorage.setItem("BaharToken", res.data.token);
      });
  };
  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    history.push("/");
  };
  return (
    <div>
      <div className="beginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input name="username" onChange={handleChange}></input>
          </div>
          <div>
            <h2>PASSWORD</h2>
            <input
              type="password"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};
export default BeginForm;
