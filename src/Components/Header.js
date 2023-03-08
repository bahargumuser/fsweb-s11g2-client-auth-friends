import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const logOut = () => {
    history.push("/");
    localStorage.removeItem("BaharToken");
  };

  return (
    <div>
      <div className="beginFormHeaderDiv">
        <div>
          <h1> FRIEND DATABASE </h1>
        </div>
        <div className="beginFormHeaderButtonDiv">
          {!localStorage.getItem("BaharToken") && (
            <button onClick={() => history.push("/login")}>LOGIN. </button>
          )}
          <button onClick={() => history.push("/friends-list")}>
            FRIENDLIST
          </button>
          <button onClick={() => history.push("/friends/add")}>
            ADDFRIEND.
          </button>
          {!localStorage.getItem("BaharToken") && (
            <button onClick={() => history.push(logOut)}>LOGOUT.</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
