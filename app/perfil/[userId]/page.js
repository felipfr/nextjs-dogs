"use client";
import UserProfile from "../../../src/Components/User/UserProfile";

export default function P({ params }) {
  return <UserProfile id={params.userId} />;
}