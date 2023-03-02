'use client'
import React from 'react';
import { UserContext } from '../../UserContext';
import { useRouter } from 'next/navigation'

const ProtectedRoute = ({ children }) => {
  const redirect = useRouter();

  const { login } = React.useContext(UserContext);
  return login ? children : redirect.push('/login');
};

export default ProtectedRoute;
