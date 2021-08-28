import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req})
    const fortnight = await prisma.fortnight.findMany({
        where:{
            creator:{email: session.user.email}
        }
    })
    res.json(fortnight)
}