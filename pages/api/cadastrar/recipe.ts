import { NextApiRequest, NextApiResponse } from "next";
import database from "../../../prisma/database/repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { id }: string | any = req.query;
  const ingredients = req.body.ingredientes;
  switch (method) {
    case "POST": {
      const userId = await database.user.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!userId) res.status(401).json("usuário não existe");
      const createRecipe = await database.recipe.create({
        data: {
          ingredients: {
            create: ingredients
          },
          share: req.body.share,
          name: req.body.name,
          userId: parseInt(id),
        },
        include:{
            ingredients: true
        }
      });
      return res.status(200).json(createRecipe);
    }
  }
}
