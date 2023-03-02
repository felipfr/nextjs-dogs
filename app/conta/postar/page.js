'use client'
import React from 'react';
import UserHeader from '../../src/Components/User/UserHeader';
import UserPhotoPost from '../../src/Components/User/UserPhotoPost';
import ProtectedRoute from '../../src/Components/Helper/ProtectedRoute';

export default function Postar() {
  return (
    <ProtectedRoute>
      <section className="container">
      <UserHeader />
      <UserPhotoPost />
      </section>
    </ProtectedRoute>
  );
}
