import { ReactNode, createContext, useEffect, useState } from "react";
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
  email: string;
  password: string;
};
type AuthContextType = {
  isAuthtenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null | any>(null);
  const router = useRouter();
  const isAuthtenticated = !!user;

  useEffect(() => {
    const { "nextauth-token": token } = parseCookies();
    if(!token) return;
    const { data }: any | null = decode(token);
    setUser(data);
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user }: any = await fetch("/api/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());

    setCookie(undefined, "nextauth-token", token, {
      maxAge: 60 * 60 * 1,
    });
    setUser(user);
    router.push("/");
  }
  return (
    <AuthContext.Provider value={{ user, isAuthtenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
