import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/client'

export default async function handle(req: NextApiRequest, res:NextApiResponse){
        // const session = await getSession({ req });
        const session = await getSession({ req });
        if (!session) {
          res.statusCode = 403;
          return { props: { focusLog: [] } };
        }
        try{
          const focusLog = await prisma.focusLog.findMany({
            where: {
              creator: {email: session.user.email}
            },
            orderBy:{
              startedAt:'desc',
            },
            take: 1
        });
        res.json(focusLog)
        res.status(200).end()

        }
        catch(e){
          console.log(e)
        res.status(500).end()

        }
        
      }
