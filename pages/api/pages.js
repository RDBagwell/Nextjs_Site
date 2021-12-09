import {usersRepo} from '../../helpers/users-repo';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const {...user} = req.body
        if (usersRepo.find(x => x.userNmae === user.userNmae)){
            res.status(200).json(usersRepo.update(1, {"userNmae": "Robert Xombie"})) 
        } else {
            res.status(200).json(usersRepo.create(user))   
        }
        
    } else {
        res.status(200).json({ name: 'Doe' })
    }
}


// export default apiHandler({
//     post: register
// });

// export default function register(req, res) {
//     // split out password from user details 
//     const {...user} = req.body;

//     // validate
//     if (usersRepo.find(x => x.username === user.username))
//         throw `User with the username "${user.username}" already exists`;

//     // hash password
//     // user.hash = bcrypt.hashSync(password, 10);    

//     usersRepo.create(user);
//     return res.status(200).json({});
// }