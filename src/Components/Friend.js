import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Friend(props) {
  const history = useHistory();
  const { id } = useParams();

  console.log("id", id);

  const [friend, setFriend] = useState([]);
  let loggedInToken = localStorage.getItem("BaharToken");
  useEffect(() => {
    if (!!!loggedInToken) {
      console.log("log", loggedInToken, loggedInToken === undefined);
      history.push("/login");
    } else {
      axios
        .get(`http://localhost:9000/api/friends/${id}"`, {
          headers: {
            gokhan: loggedInToken,
          },
        })
        .then((res) => setFriend(res.data))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="friendListDiv">
      <h1>FRIEND</h1>
      <div className="friendList">
        -{friend.name}
        {friend.email}
      </div>
    </div>
  );
}
