import type { NextApiRequest, NextApiResponse } from 'next'
import { tryGetPreviewData } from 'next/dist/server/api-utils';
import prisma from '../../../lib/prisma'


// DELETE /api/post/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const collectionId = req.query.id;
  try{
    if (req.method === "DELETE") {
      const collection = await prisma.collection.delete({
        where: { id: Number(collectionId) },
      });
      res.json(collection);
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
    }
    res.status(200).end()
  }
  catch(e){
    console.log(e)
    res.status(500).end()

  }
}
