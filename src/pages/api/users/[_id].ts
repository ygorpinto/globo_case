import axios from 'axios'

export default async function usersHandler(req, res) {
  const _id = req.query._id;
      const fetchdata = await axios.get(`http://localhost:3000/api/users/${_id}`)
      const user = await fetchdata.data
      res.status(200).json(user) 
}
