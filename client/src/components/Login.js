import React, { useEffect, useState } from "react";
import userIcon from "../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";

const Login = ({ login, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const redirectPageAfterLogin = "/characters";

  useEffect(() => {
    if (user) {
      navigate(redirectPageAfterLogin);
    }
  }, [navigate, user]);

  const onHandleLogin = (e) => {
    e.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Rick morty App</h2>
      <div className={styles.loginContent}>
        <form className={styles.form}>
          <div>
            <img
              className={styles.userIcon}
              src={userIcon}
              width="100"
              height="100"
              alt="user"
            />
          </div>
          <div className={styles.inputContainer}>
            <div>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div>
              <input
                className={styles.input}
                type="password"
                placeholder="password "
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          </div>
          <button className={styles.loginButton} onClick={onHandleLogin}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
