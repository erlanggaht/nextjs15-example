import React from "react";
import UserView from "../../_components/user-view";
import UsersAPI from "../../../../../../lib/api/users.api";
import { TypeDataUserById } from "../../../../../../types/users.types";

const getUserById = async (id: number) => {
  const response = await UsersAPI.getById(id);
  return response?.data;
};

async function PageUserView({ params }: { params: { userId: string } }) {
  params = await params;
  const userId = await params.userId;

  const dataUserById: TypeDataUserById = await getUserById(parseInt(userId));
  return <UserView dataUserById={dataUserById} />;
}

export default PageUserView;
