import clientPromise from "../../../utils/mongodb";


export default async function handler(req,res){
    const client = await clientPromise;
    const db = client.db("weddingRsvpDB");
    const { code } = req.query;
    console.log(code);

    if(req.method==="GET"){
        const entry = await db.collection("guests").findOne({uniqueCode:code});
        if(entry!==null){
            res.status(200).json({success:true})
        }else{
            res.status(204).end();
        }
    }else if(req.method==="PUT"){
        let data = JSON.parse(req.body);
        let updateDoc = {$set:{people:data}};
        const entry = await db.collection("guests").updateOne({uniqueCode:code},updateDoc);
        if(entry.matchedCount>0){
            res.status(200).json({success:true})
        }else{
            res.status(204).end()
        }

    }else{
        res.status(405).send("Invalid method")
    }
}
