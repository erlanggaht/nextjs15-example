'use client'
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function Users() {
  const t = useTranslations("Users");
  return (
    <div>
      <h1 className="text-center text-2xl uppercase">{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}

export default Users;
