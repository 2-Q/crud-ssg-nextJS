import db from '../../../../libs/db';
import authorization from '../../../../midlewares/authorization';

export default async function handler(req, res){
    if (req.method !== "GET") return res.status(405).end()
    const auth = await authorization(req, res);
    
    const { id} = req.query

    const data = await db('posts').where({id}).first();

    res.status(200);
    // res.end("hello");
    res.json({
        message: "hello",
        data
    })
}