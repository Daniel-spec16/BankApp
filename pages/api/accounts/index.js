import dbConnect from "@/util/mongo";
import Account from "../../../models/Account";

export default async function handler(req,res){
    const {method} = req;

    await dbConnect();

    if(method === "GET"){
        try{
            const account = await Account.find();
            res.status(200).json(account)
        } catch(err) {
            res.status(500).json(err);
        }
    }
    if(method === "POST"){
        try{
            const account = await Account.create(req.body);
            res.status(201).json(account)
        } catch(err) {
            console.log('tut2')
            res.status(600).json(err);
        }
    }
}