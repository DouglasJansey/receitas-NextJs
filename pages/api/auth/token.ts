import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import client from '../../../prisma/database/repository'


export default async function tokenGenerate(req: NextApiRequest, res:NextApiResponse){
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(401).json({
            errors: ["Email ou senha inválido"]
        });
    }
    const user = await client.user.findUnique({
        where:{
            email: email,
        },
        select: {
            id: false,
            email: true,
            name: true,
            recipe: true
        }
    })
    if(!user) {
        return res.status(401).json({
            errors: ["Usuário não existe"]
        });
    }
    // validar password

    
    const secret: string | any = process.env.SECRET
    const expiredAt: string | any = process.env.EXPIRATION
    const token = jwt.sign({ data: user }, secret, {
       expiresIn: expiredAt 
    });
    res.status(200).json({
        token,
        user:{
            name: user.name,
            email,
            recipe: user.recipe
        }
    })
}