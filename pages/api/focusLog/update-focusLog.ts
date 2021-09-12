import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/client'

// PUT /api/publish/:id
// create a new fortnight
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const {focusedMin, action, id} = req.body
    const session = await getSession({ req });
    try{
        const focusLog = await prisma.focusLog.update({
            where:{
                id:id
            }, 
            data:{
                [action]:{
                    increment:focusedMin
                },
                totFocusedMin:{
                    increment:focusedMin
                },
            }
        });
        res.json(focusLog);
    }
    catch(e){
        console.log(e)
    }
    }
