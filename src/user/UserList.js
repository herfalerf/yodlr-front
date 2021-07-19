import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import YodlrApi from "../api/api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(function getUsersOnMount() {
    console.debug("UserList useEffect getUsersOnMount");

    getUsers();
  }, []);

  async function getUsers() {
    let users = await YodlrApi.getUsersList();

    setUsers(users);
  }

  return (
    <div className="UserList col-md-8 offset-md-2">
      <div>
        {users.map((user) => (
          <UserCard
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            state={user.state}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
