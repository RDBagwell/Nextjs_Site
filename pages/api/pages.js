import {connectToDatabase} from '../../lib/mongodb';

export default async (req, res)=>{
    const { db } = await connectToDatabase();
    const pages = await db
    .collection("pages")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();
    res.json(pages);
}