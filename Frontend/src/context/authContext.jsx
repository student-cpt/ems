import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:3000/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.success) {
            setUser(response.data.token);
          } else {
            setUser(null);
          }
        } 
      } catch (error) {
        //console.error("Verification error:", error);
          console.error("Verification error:", error?.response?.data || error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.user);
  };
  //  const login = (responseData) => {
  //   setUser(responseData.user);
  //   localStorage.setItem("token", responseData.token);
  // };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);

export default AuthProvider;
