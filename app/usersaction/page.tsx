import React from "react";
import UsersList from "./UsersList";

export const runtime = "edge";

const UsersActionPage = () => {
  return (
    <div>
      UsersActionPage <UsersList />
    </div>
  );
};

export default UsersActionPage;
