"use client";
import React from "react";
import { UserContext } from "@/src/UserContext";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function RootLayout({ children }) {
  const { login } = React.useContext(UserContext);
  const router = useRouter();

  if (login === true) return router.push("/conta");

  return <>{ children }</>;
}
