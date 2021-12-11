import {usersRepo} from '../../helpers/users-repo';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const {...user} = req.body
        if (usersRepo.find(x => x.userNmae === user.userNmae)){
            res.status(200).json({ error: `User with the username ${user.userNmae} already exists` }) 
        } else {
            res.status(200).json(usersRepo.create(user))   
        }
        
    } else {
        res.status(500).json({ name: 'Doe' })
    }
}