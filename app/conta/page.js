"use client";
import Feed from "../../src/Components/Feed/Feed";
import ProtectedRoute from "../../src/Components/Helper/ProtectedRoute";
import React from "react";
import UserHeader from "../../src/Components/User/UserHeader";
import { UserContext } from "../../src/UserContext";

export default function Account() {
  const { data } = React.useContext(UserContext);

  return (
    <ProtectedRoute>
      <section className="container">
        <UserHeader />
        {data ? <Feed user={data.id} /> : <Feed />}
      </section>
    </ProtectedRoute>
  );
}
