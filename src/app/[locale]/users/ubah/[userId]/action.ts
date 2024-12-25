"use server";

import axios from "axios";
import UsersAPI from "../../../../../../lib/api/users.api";

export async function ActionUpdateUser(
  userId: string | number,
  formData: FormData
) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const age = parseInt(formData.get("age") as string);
  const bodyData = {
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    age: age ?? 0,
  };

  try {
    const response = await UsersAPI.update(userId, bodyData);
    if(response?.status === 200 || response?.status === 201) {
      return {error: false, status: response?.status, success: true,message: "Data updated successfully"}
    }
  } catch (error) {
      if(axios.isAxiosError(error)) {
        return {error: true, status: error?.status, success: false, message: error.message}
      }
  }
}

