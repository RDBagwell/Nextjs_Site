import {usersRepo} from '../../helpers/users-repo';
import { getSession } from "next-auth/react"

// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const {...user} = req.body
//         if (usersRepo.find(x => x.userNmae === user.userNmae)){
//             res.status(200).json({ error: `User with the username ${user.userNmae} already exists` }) 
//         } else {
//             res.status(200).json(usersRepo.create(user))   
//         }
        
//     } else {
//         res.status(500).json({ name: 'Doe' })
//     }
// }



// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    if (req.method === 'POST') {
        const {...user} = req.body
        if (usersRepo.find(x => x.userNmae === user.userNmae)){
            res.status(400).json({ error: `User with the username ${user.userNmae} already exists` }) 
        } else {
            res.status(200).json(usersRepo.create(user))   
        }
        
    } else {
        res.status(500).json({ name: 'Doe' })
    }
  } else {
    // Not Signed in
    res.status(401).json({ error: 'Not Signed in' })
  }
  res.end()
}