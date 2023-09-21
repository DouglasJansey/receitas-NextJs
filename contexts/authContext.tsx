import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { decode } from "jsonwebtoken";
import { useRouter }  from "next/router";

type User = {
  id: number;
  name: string;
  email: string;
  recipe?: Array<void>;
};
type SignInData = {
  order: object;
};
type AuthContextType = {
  isAuthtenticated: boolean;
  user: User | null;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null | any>(null);
  const router = useRouter();
  const isAuthtenticated = !!user;

  useEffect(() => {
  }, []);

  function signIn({ order }: SignInData) {
    setUser(user);
    router.push("/");
  }
  return (
    <AuthContext.Provider value={{ user, isAuthtenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
