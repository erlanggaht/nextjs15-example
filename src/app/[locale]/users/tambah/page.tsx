import React from "react";
import UserTambah from "../_components/user-create";

async function PageUserCreate({ params }: { params: { userId: string } }) {
  params = await params;

  return <UserTambah />;
}

export default PageUserCreate;
