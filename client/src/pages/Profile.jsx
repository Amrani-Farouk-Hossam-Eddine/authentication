import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      await axios
        .get("http://localhost:8800/api/users/" + currentUser.id)
        .then((res) => {
          return res.data;
        }),
  });
  console.log(data);
  return (
    <div className="profile">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="info">
          <div className="username">
            <p>Username: </p>
            <span>{data.username}</span>
          </div>
          <div className="email">
            <p>Email: </p>
            <span>{data.email}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
