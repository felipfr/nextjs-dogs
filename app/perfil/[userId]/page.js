"use client";
import UserProfile from "@/src/Components/User/UserProfile";

export default function Perfil({ params }) {
  return <UserProfile id={params.userId} />;
}