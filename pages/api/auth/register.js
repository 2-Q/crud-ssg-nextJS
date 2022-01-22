import db from '../../../libs/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res){
    if (req.method !== "POST") return res.status(405).end()
    
    const { email, password} = req.body
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const register = await db('users').insert({
        email,
        password:passwordHash
    })
    
    const data = await db('users').where({id: register}).first();

    const token = jwt.sign({
        id: data.id,
        email: data.email
    }, 'dwiki', {
        expiresIn: '7d'
    })

    res.status(200);
    res.json({
        message: "hello",
        token
    })

}