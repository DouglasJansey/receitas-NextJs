/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/router'
import { decode } from 'jsonwebtoken';

type UserType = {
    email: string,
    endereco: {},
    telefone: {},
}
type SignInData = {
    email: string,
    password: string
}
type AuthContextType = {
    isAuthenticated: Boolean;
    user: UserType | null;
    SignIn: (data: SignInData) => Promise<void>
}
type authContextProps = {
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: authContextProps) {
    const [user, setUser] = useState<UserType | null>(null)
    const isAuthenticated = !!user;
    const router = useRouter()

    const SignIn = async ({ email, password }: SignInData) => {

        const data = await fetch('/api/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const {token} = await data.json();
        setCookie(undefined, 'AUTH-TOKEN', token,{
            maxAge: 60 * 60 * 24,
            path: '/'
        })
        router.push('/')
    }
    useEffect(()=>{
        const {'AUTH-TOKEN': token} = parseCookies();
        if(token){
            const { user }: any = decode(token);
            setUser(user)
        }
    },[])
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, SignIn }}>
            {children}
        </AuthContext.Provider>
    )
}