import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req})
    try{
        const focusLog = await prisma.focusLog.findMany({
            where:{
                creator:{email: session.user.email}
            }
        })
        res.json(focusLog)
        res.status(200).end()

    }
    catch(e){
        console.log(e)
        res.status(500).end()

    }
    
}