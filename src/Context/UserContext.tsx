import React, { useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  profileImage: "",
  handleSetValues: (key: string, value: string) => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profileImage: "",
    token: localStorage.getItem("token") ?? "",
  });

  const handleSetValues = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  // const handleFetch = useFetch();
  // useEffect(() => {
  //   if (values.token != "") {
  //     const jsonResponse = handleFetch({
  //       path: "user/me",
  //       method: "GET",
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   }
  // }, [values.token]);

  return (
    <UserContext.Provider value={{ ...values, handleSetValues }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
