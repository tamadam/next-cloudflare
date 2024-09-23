"use client";

import Button from "@/app/components/Button/Button";

const UserForm = () => {
  const saveUser = async () => {
    const result = await fetch(
      `https://next-cloudflare-drl.pages.dev/api/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1, name: "test" }),
      }
    );

    console.log(await result.json());
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveUser();
      }}
    >
      <input type="text" id="name" name="username" />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default UserForm;
