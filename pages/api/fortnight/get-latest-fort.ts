import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/client'

export default async function handle(req: NextApiRequest, res:NextApiResponse){
        // const session = await getSession({ req });
        const session = await getSession({ req });
        if (!session) {
          res.statusCode = 403;
          return { props: { fortnight: [] } };
        }
        const fortnight = await prisma.fortnight.findFirst({
            where: {
              creator: {email: session.user.email}
            }
        });
        res.json(fortnight)
      }
