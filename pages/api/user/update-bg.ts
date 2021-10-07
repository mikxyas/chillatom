import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/client'

// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    const keyword = req.body.background
    try{
        const user = await prisma.user.update({
            where: { email: session.user.email },
            data: { background: keyword },
        });
        res.json(user);
        res.status(200).end()

    }
    catch(e){
        console.log(e)
        res.status(500).end()

    }
    
}
