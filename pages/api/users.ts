import type { NextApiRequest, NextApiResponse } from "next";
import  { saveUser }  from "./userService/userService";

export default async function handler (req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'POST'){
        const newUser = await saveUser(req.body)
        res.status(200).json({newUser}); 
    }
}