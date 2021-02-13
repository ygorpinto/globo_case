import { NextApiRequest, NextApiResponse } from 'next';
import {connectToDatabase} from '../../../utils/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {method} = req

     if (method === 'GET') {
      const {db} = await connectToDatabase();
      const data = await db.collection('globo_users').find().toArray();
      res.status(200).json(data);
      return;
     }
       
     if (method === 'POST') {
      const {db} = await connectToDatabase();
      const result = await db.collection('globo_users').insertOne(req.body);
      res.status(201).json(result);
      return;
     }

     if (method === 'PUT') {
      const {db} = await connectToDatabase();
      const update = await db.collection('globo_users').updateOne({"name":"macacodoido"},{$set:{"name":"ok"}});
      res.status(202).json(update)
      return;
     }

     if (method === 'DELETE') {
      const {db} = await connectToDatabase();
      const remove = await db.collection('globo_users').deleteOne({"name":"ok"});
      res.status(202).json(remove);
      return;
     }
      
     else{
      res.setHeader('Allow', ['GET' ,'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      return;
     }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
