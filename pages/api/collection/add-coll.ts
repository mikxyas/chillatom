import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const {title, video_id, isPlaylist, isLivestream, isVideo} = req.body
    const session = await getSession({req})
    try{
        const collection = await prisma.collection.create({
            data:{
                title:title,
                video_id:video_id,
                isPlaylist:isPlaylist,
                isLivestream:isLivestream,
                isVideo:isVideo,
                creator:{connect: {email :session?.user?.email}}
            }
        });
        res.json(collection)
    }
    catch(e){
        console.log(e)
    }
}