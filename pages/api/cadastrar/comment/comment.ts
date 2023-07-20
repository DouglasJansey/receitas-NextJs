import { NextApiRequest, NextApiResponse } from "next";
import client from '../../../../prisma/database/repository'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { method } = req
    const date = new Date().toLocaleString("pt-BR", {timeZone: "America/Brasilia"})
    switch(method){
        case "GET" : {
            const getComment = await client.comments.findMany()
            res.status(201).json(getComment)
        }
        case "POST": {
            const newComment = await client.comments.create({
                data:{
                    author: req.body.author,
                    comment: req.body.comment,
                    date: date,
                    recipeId: req.body.recipeId,
                }
            })
            res.status(200).json(newComment)
        }
    }
}