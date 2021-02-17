import { NextApiRequest, NextApiResponse } from 'next';
import {connectToDatabase} from '../../../utils/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {method,query} = req

     if (method === 'GET') {
      const {db} = await connectToDatabase();
      const data = await db.collection('globo_users').findOne({username:`${query.id}`});
      res.status(200).json(data);
      return;
     }

     if (method === 'DELETE') {
      const {db} = await connectToDatabase();
      const remove = await db.collection('globo_users').deleteOne({username:`${query.id}`});
      res.status(202).json(remove);
      return;
     }
      
     else{
      res.setHeader('Allow', ['GET' , 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      return;
     }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler