import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/client'

// Handle all api requests from one file and from one link
export default async function handle(req: NextApiRequest, res:NextApiResponse){
        // const session = await getSession({ req });
        const session = await getSession({ req });
        const {focusFor, chillFor} = req.body
        if (!session) {
          res.statusCode = 403;
          return { props: { user: [] } };
        }
        const user = await prisma.user.update({
            where: {
              email:session.user.email
            },
            data:{
                focusFor:Number(focusFor),
                chillFor: Number(chillFor)
            }
        });
        res.json(user)
      }