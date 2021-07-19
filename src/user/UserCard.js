import React from "react";
import "./UserCard.css";

const UserCard = ({ id, firstName, lastName, email, state }) => {
  return (
    <div className="User-Card card">
      <div className="card-body">
        <h6 className="card-title">
          {firstName} {lastName}
        </h6>
        <p>
          <small>User Id: {id}</small>
        </p>
        <p>
          <small>Email: {email}</small>
        </p>
        <p>
          <small>Active: {state}</small>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
