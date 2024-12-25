"use client";

import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import UsersAPI from "../../../../../lib/api/users.api";
import { TypeDataUsers } from "../../../../../types/users.types";

function Users({ dataUsers }: { dataUsers: TypeDataUsers }) {
  const router = useRouter();
  const t = useTranslations("Users");
  const t_global = useTranslations("Global");

  // Fetch Client
  const [usersClient, setUsersClient] = useState<TypeDataUsers>({ users: [] });
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await UsersAPI.getAll();
      setUsersClient(response?.data);
    };
    fetchUsers();
  }, []);

  // Render Data
  const RenderData = (type: "server" | "client") => {
    const server: TypeDataUsers = dataUsers;
    const client: TypeDataUsers = usersClient;
    const typeFetch = {
      server,
      client,
    };

    return (
      <div className="border rounded-lg shadow">
        <h1 className="text-xl text-center py-2 capitalize">Data {t(type)}</h1>
        {typeFetch?.[type]?.users?.map((user) => {
          return (
            <div
              key={user.id}
              className="py-4 px-4 border-b flex justify-between items-center"
            >
              <p>
                {user.id}. {user.firstName} {user.lastName} - {user.age} age
              </p>
              <div className="flex gap-1">
                <Link
                  href={`/users/lihat/${user.id}`}
                  prefetch={false}
                  onMouseEnter={() =>
                    router.prefetch(`/users/lihat/${user.id}`)
                  }
                >
                  <button className="bg-black text-white px-3 py-2 rounded">
                    {t_global("view")}
                  </button>
                </Link>
                <Link
                  href={`/users/ubah/${user.id}`}
                  prefetch={false}
                  onMouseEnter={() =>
                    router.prefetch(`/users/lihat/${user.id}`)
                  }
                >
                  <button className="bg-black text-white px-3 py-2 rounded">
                    {t_global("edit")}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-center text-2xl uppercase">{t("title")}</h1>
      <main className="grid grid-cols-2 gap-2 py-6">
        <section>{RenderData("server")}</section>
        {usersClient.users.at(0) ? (
          <section>{RenderData("client")}</section>
        ) : (
          <div className="skeleton h-full w-full"></div>
        )}
      </main>
    </div>
  );
}

export default Users;
