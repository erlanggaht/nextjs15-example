import React from "react";
import UsersAPI from "../../../../../../lib/api/users.api";
import UserEdit from "../../_components/user-edit";
import { TypeDataUserById } from "../../../../../../types/users.types";

 const getUserById = async (id: number) => {
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
