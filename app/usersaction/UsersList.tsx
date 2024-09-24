"use client";

import { useState } from "react";
import { testDataFetch, User } from "../actions/actions";

const UsersList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const handleClick = async () => {
    const result = await testDataFetch(searchValue);
    setUsers(result);
    console.log(result);
  };

  return (
    <div>
      UsersList
      {users.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
      <h1>Search for users</h1>
      <input
        type="text"
        name="query"
        id="query"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        value={searchValue}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default UsersList;
