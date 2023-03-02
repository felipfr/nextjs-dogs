'use client'
import LoginForm from "./LoginForm.js";
import React from "react";
import { UserContext } from "@/src/UserContext.js";
import { useRouter } from "next/navigation";

export default function LoginVerify() {
  const { login } = React.useContext(UserContext);
  const router = useRouter();

  if (login === true) return router.push("/conta");

  return <LoginForm />;
}