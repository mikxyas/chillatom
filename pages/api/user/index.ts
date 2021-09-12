import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req})
    try{
        const user = await prisma.user.findUnique({
            where:{
                email: session.user.email
            },
            select:{
                name:true,
                image:true,
                listeningTo:true,
                focusFor:true,
                focusingOn:true,
                chillFor:true,
                theme:true,
                createdAt:true,
            }
        })
        res.json(user)
    }
    catch(e){
        console.log(e)
    }
}