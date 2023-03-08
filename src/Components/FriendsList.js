import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function FriendsList(props) {
  const history = useHistory();

  const [friends, setFriends] = useState([]);
  let loggedInToken = localStorage.getItem("BaharToken");
  useEffect(() => {
    if (!!!loggedInToken) {
      console.log("log", loggedInToken, loggedInToken === undefined);
      history.push("/login");
    } else {
      axios
        .get("http://localhost:9000/api/friends", {
          headers: {
            gokhan: loggedInToken,
          },
        })
        .then((res) => setFriends(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="friendListDiv">
      <p>Arkadaş Listesi falan</p>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
