import db from '../../../libs/db';
import authorization from '../../../midlewares/authorization';

export default async function handler(req, res){
    if (req.method !== "POST") return res.status(405).end()
    const auth = await authorization(req, res);
    
    const { title, content} = req.body
    const create = await db('posts').insert({
        title,
        content
    })
    
    const data = await db('posts').where({id: create}).first();

    res.status(200);
    // res.end("hello");
    res.json({
        message: "hello",
        data
    })
}