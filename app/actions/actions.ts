"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const handleContentPageRevalidate = async () => {
  revalidatePath("/content");
};

export const handleContentPageTagRevalidate = async () => {
  revalidateTag("content");
};

export interface User {
  id: string;
  username: string;
}

interface UserResponse {
  users: User[];
}

export const testDataFetch = async (searchTerm: string) => {
  const users: UserResponse = await fetch(
    `https://dummyjson.com/users/search?q=${searchTerm}`
  ).then((response) => response.json());

  return users.users;
};
