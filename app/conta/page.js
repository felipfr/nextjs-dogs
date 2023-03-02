import ProtectedRoute from "../../src/Components/Helper/ProtectedRoute";
import React from "react";
import UserHeader from "../../src/Components/User/UserHeader";
import MyAccount from "@/src/Components/User/MyAccount";

export const metadata = {
  title: 'Minha Conta',
};

export default function Account() {

  return (
    <ProtectedRoute>
      <section className="container">
        <UserHeader />
        <MyAccount />
      </section>
    </ProtectedRoute>
  );
}
