import { NextApiRequest, NextApiResponse } from "next";
import { Token } from "./token/token";

export default async function handlerToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST"){
    const token = await Token(req.body)
    return res.status(200).json({token});
  }
}
