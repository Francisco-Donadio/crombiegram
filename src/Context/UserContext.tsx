import React, { useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const UserContext = React.createContext({
  firsName: "",
  lastName: "",
  email: "",
  token: "",
  handleSetValues: (key: string, value: string) => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [values, setValues] = useState({
    firsName: "",
    lastName: "",
    email: "",
    token: localStorage.getItem("token") ?? "",
  });
  const handleFetch = useFetch();

  const handleSetValues = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };
  useEffect(() => {
    if (values.token) {
      const jsonResponse = handleFetch({
        path: "user/me",
        method: "GET",
      });
    }
  }, [values.token]);

  return (
    <UserContext.Provider value={{ ...values, handleSetValues }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
