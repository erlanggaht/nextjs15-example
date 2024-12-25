"use server";

import { error } from "console";
import UsersAPI from "../../../../../../lib/api/users.api";

export async function ActionUpdateUser(
  userId: string | number,
  formData: FormData
) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const age = formData.get("age");
  const bodyData = {
    firstName,
    lastName,
    age,
  };

  try {
    const response = await UsersAPI.update(userId, bodyData);
    return {error: false, status: response?.status, success: true}
  } catch (error) {
    if(error) {
      return {error: true}
    }
  }
}

