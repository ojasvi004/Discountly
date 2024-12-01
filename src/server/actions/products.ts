"use server";

import { productDetailsSchema } from "@/schemas/products";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { createProduct as createProductDb } from "../db/products";
import { redirect } from "next/navigation";
import { deleteProduct as deleteProductDb } from "../db/products";

export async function createProduct(
  unsafeData: z.infer<typeof productDetailsSchema>
): Promise<{ error: boolean; message: string } | undefined> {
  const { userId } = await auth();
  const { success, data } = productDetailsSchema.safeParse(unsafeData);

  if (!success || userId == null) {
    return { error: true, message: "there was an error creating your product" };
  }

  const { id } = await createProductDb({ ...data, clerkUserId: userId });

  redirect(`/dashboard/products/${id}/edit?tab=countries`);
}

export async function deleteProduct(id: string) {
  const { userId } = await auth();
  if (userId == null) {
    return {
      error: true,
      message: "there was an  error deleting your product",
    };
  }
  await deleteProductDb({ id, userId });
}
