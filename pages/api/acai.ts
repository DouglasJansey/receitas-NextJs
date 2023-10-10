import type { NextApiRequest, NextApiResponse } from "next";
import  { saveAcai }  from "./acaiService/AcaiService";

export default function handler (req: NextApiRequest, res: NextApiResponse){

    if(req.method === 'POST'){
        const {clientId, ...rest} = req.body 
        const newAcai = saveAcai({...rest}, clientId)
        res.status(200).json({newAcai}); 
    }
}