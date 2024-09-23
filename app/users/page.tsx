import UserForm from "./components/UserForm";

interface User {
  id: string;
  username: string;
}

interface UsersResponse {
  users: User[];
}

const UsersPage = async () => {
  const users: UsersResponse = await fetch(
    `https://next-cloudflare-drl.pages.dev/api/users`
  ).then((response) => response.json());

  return (
    <div>
      Users:
      <ul>
        {users.users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <UserForm />
    </div>
  );
};

export default UsersPage;
