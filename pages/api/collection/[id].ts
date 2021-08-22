import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// DELETE /api/post/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const collectionId = req.query.id;
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
}
