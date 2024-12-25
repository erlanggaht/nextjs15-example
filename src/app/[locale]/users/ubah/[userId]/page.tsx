import React from "react";
import UsersAPI from "../../../../../../lib/api/users.api";
import UserEdit from "../../_components/user-edit";

export type TypeDataUserById = {
  id: number | string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
    country: string;
  };
  age: number;
  phone: string;
  email: string;
};

export const getUserById = async (id: number) => {
  const response = await UsersAPI.getById(id);
  return response?.data;
};

async function PageUserView({ params }: { params: { userId: string } }) {
  params = await params;
  const userId = await params.userId;
  const dataUserById: TypeDataUserById = await getUserById(parseInt(userId));

  return <UserEdit dataUserById={dataUserById} />;
}

export default PageUserView;
