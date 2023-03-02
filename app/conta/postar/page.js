import ProtectedRoute from "../../../src/Components/Helper/ProtectedRoute";
import React from "react";
import UserHeader from "../../../src/Components/User/UserHeader";
import UserPhotoPost from "../../../src/Components/User/UserPhotoPost";

export const metadata = {
  title: 'Poste sua Foto',
};

export default function Post() {
  return (
    <ProtectedRoute>
      <section className="container">
        <UserHeader />
        <UserPhotoPost />
      </section>
    </ProtectedRoute>
  );
}
