import ProtectedRoute from "../../../src/Components/Helper/ProtectedRoute";
import React from "react";
import UserHeader from "../../../src/Components/User/UserHeader";
import UserStats from "../../../src/Components/User/UserStats";

export default function Stats() {
  return (
    <ProtectedRoute>
      <section className="container">
        <UserHeader />
        <UserStats />
      </section>
    </ProtectedRoute>
  );
}
