import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/client'

// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    const theme = req.body.theme
    try{
        const user = await prisma.user.update({
            where: { email: session.user.email },
            data: { theme: theme },
        });
        res.json(user);
    }
    catch(e){
        console.log(e)
    }
}
