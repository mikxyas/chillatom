import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const {focusedMin, action} = req.body
    const session = await getSession({req})
    const focusLog = await prisma.focusLog.create({
        data:{
            [action]:focusedMin,
            totFocusedMin:focusedMin,
            creator:{connect: {email :session?.user?.email}}
        }
    });
    res.json(focusLog)
}