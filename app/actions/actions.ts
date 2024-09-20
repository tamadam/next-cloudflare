"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const handleContentPageRevalidate = async () => {
  revalidatePath("/content");
};

export const handleContentPageTagRevalidate = async () => {
  revalidateTag("content");
};
