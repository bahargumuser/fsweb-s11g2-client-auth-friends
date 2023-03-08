import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import BeginForm from "./Components/BeginForm";
import FriendsList from "./Components/FriendsList";
import Friend from "./Components/Friend";
import AddFriendForm from "./Components/AddFriendForm";

import Header from "./Components/Header";

function App() {
  const [loggedInToken, setloggedInToken] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setloggedInToken(localStorage.getItem("BaharToken"));
    setisLoggedIn(loggedInToken === undefined ? true : false);
  }, []);

  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/login">
          <LoginForm></LoginForm>
        </Route>
        <Route
          render={() =>
            isLoggedIn ? (
              <FriendsList />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                }}
              />
            )
          }
          path="friends-list"
        />

        <Route path="/friends/:id">
          <Friend />
        </Route>
        <Route exact path="/friends/add">
          <AddFriendForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
