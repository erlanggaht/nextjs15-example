import React from "react";
import Users from "./_components/users";
import UsersAPI from "../../../../lib/api/users.api";

export type TypeDataUsers = {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    address: {
      city: string;
      country: string;
    };
    age: number;
  }[];
};

export const getUsers = async () => {
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
