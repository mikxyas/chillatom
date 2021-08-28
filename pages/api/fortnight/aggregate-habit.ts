import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req})
    const aggregations = await prisma.fortnight.aggregate({
        _sum: {
          studiedFor:true,
          wroteFor:true,
          drewFor:true,
          readFor:true,
          totFocusedMin:true,
        },
      })
    res.json(aggregations)
}