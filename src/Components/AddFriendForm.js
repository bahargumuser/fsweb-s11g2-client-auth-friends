import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddFriendForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const history = useHistory();

  let loggedInToken = localStorage.getItem("BaharToken");

  const onSubmitBegin = (data) => {
    const config = {
      method: "post",
      url: "http://localhost:9000/api/friends",
      headers: {
        "Content-Type": "application/json",
        gokhan: loggedInToken,
      },
      data: JSON.stringify(data),
    };
    axios(config)
      .then(function (response) {
        history.push("/friends-list");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="loginFormMainDiv">
      <h1>Add Friend</h1>
      <form onSubmit={handleSubmit(onSubmitBegin)}>
        <div>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: "Adın nedir?" })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            {...register("name", { required: "E posta verir misin?" })}
          />
        </div>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}
