import React from "react";
import Users from "./_components/users";
import UsersAPI from "../../../../lib/api/users.api";
import { TypeDataUsers } from "../../../../types/users.types";

const getUsers = async () => {
  const response = await UsersAPI.getAll({
    page: 1,
  });
  return response?.data;
};

async function PageUser() {
  const dataUsers: TypeDataUsers = await getUsers();
  return <Users dataUsers={dataUsers} />;
}

export default PageUser;
