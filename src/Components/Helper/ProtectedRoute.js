"use client";
import React from "react";
import { UserContext } from "../../UserContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const redirect = useRouter();
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    if (!login) {
      redirect.push("/login");
    }
  }, [login, redirect]);

  return login ? children : null;
};

export default ProtectedRoute;
