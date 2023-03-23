import dbConnect from "../../../util/mongo";
import Account from "../../../models/Account";

export default async function handler(req,res){
    const {method, query: {id}} = req;

    await dbConnect();

    if(method === "GET"){
        try{
            const account = await Account.findById(id);
            res.status(200).json(account)
        } catch(err) {
            res.status(600).json(err);
        }
    }
    if(method === "PUT"){
        try{
            const account = await Account.findByIdAndUpdate(id, req.body);
            res.status(201).json(account)
        } catch(err) {
            console.log('tut1');
            res.status(500).json(err);
        }
    }
    if(method === "DELETE"){
        try{
            await Account.findByIdAndDelete(id);
            res.status(200).json('the account has been deleted')
        } catch(err) {
            res.status(500).json(err);
        }
    }
}