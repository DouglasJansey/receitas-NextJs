import { NextApiRequest, NextApiResponse } from "next";
import repository from "../../../prisma/database/repository";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { method } = req;
    const  { id }: string | any = req.query;
    switch(method){
        case "GET":{
            if(!id) return res.status(401).json({
                errors:["Usuário não encontrado"]
            })
            const getUsers = await repository.user.findUnique({
                where:{
                    id: parseInt(id),
                },
                select: {
                    id: false,
                    email: true,
                    name: true,
                    recipe: true
                }
            });
            return res.status(200).json(getUsers)
        }
        case "POST":{
            const createUsers = await repository.user.create({
                data:{
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                }
            });
            return res.status(200).json(createUsers)
        }
    }
}
