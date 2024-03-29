import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({req})
    try{
      const aggregations = await prisma.focusLog.aggregate({
        _sum: {
          studiedFor:true,
          wroteFor:true,
          drewFor:true,
          readFor:true,
          totFocusedMin:true,
        },
        where:{
          creator: {email: session.user.email}
        }
      })
    res.json(aggregations)
    res.status(200).end()

    }
    catch(e){
      console.log(e)
      res.status(500).end()

    }
   
}