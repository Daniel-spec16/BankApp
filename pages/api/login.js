import cookie from "cookie";
import dbConnect from "@/util/mongo";
import User from '@/models/Account';

const handler = async (req, res) => {

    await dbConnect();


    if(req.method === "POST"){
        const {username, password} = req.body;
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
            res.setHeader('Set-Cookie', cookie.serialize('token', process.env.TOKEN, {
                maxAge: 60 * 60,
                sameSite: 'strict',
                path: '/', 

            }))
            res.status(200).json('Successfull')
        } else {
            if (username === process.env.USER_USERNAME && password === process.env.USER_PASSWORD){
                res.setHeader('Set-Cookie', cookie.serialize('token', process.env.USER_TOKEN, {
                    maxAge: 60 * 60,
                    sameSite: 'strict',
                    path: '/', 
    
                }))
                res.status(200).json('Successfull')}


            
        }
    }
}

export default handler;