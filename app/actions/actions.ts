"use server";

import { revalidatePath } from "next/cache";

export const handleContentPageRevalidate = async () => {
  revalidatePath("/content");
};
