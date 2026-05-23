import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  function login(email, password) {

    /*
    Simulação login
    */

    const fakeUser = {
      email
    };

    setUser(fakeUser);

    localStorage.setItem(
      "user",
      JSON.stringify(fakeUser)
    );
  }

  function logout() {

    setUser(null);

    localStorage.removeItem("user");

  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}