import React from "react";
import classes from "./login.module.css";
import { loginUrl } from "../../server/LoginAuth";

const LoginPage = () => {
  return (
    <div className={classes.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="A Spotify Logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default LoginPage;
