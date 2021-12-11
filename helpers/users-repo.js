import fs from 'fs';
import users from '../lib/page.json';
import path from 'path';

export const usersRepo = {
    getAll: ()=> users,
    find: x => users.find(x),
    create,
    update,
    delet: _delete
}

function create(user) {
    user.id = users.length ? Math.max(...users.map( x => x.id )) + 1 : 1;
    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();
    users.push(user);
    save();
    return `saved: ${JSON.stringify(user) }`;
}


function update(id,params) {
     const user = users.find( x => x.id.toString() === id.toString());
     if(user === undefined){
        return false
     } else {
        user.dateUpdated = new Date().toISOString();
        Object.assign(user, params);
        save();
        return `update: ${JSON.stringify(user)}`;
     }

}

function _delete(id) {
    users = users.filter(x => x.id.toString() !== id.toString());

    return `update: ${JSON.stringify(users)}`;
    // save()
}

function save() {
    const saveDir = path.join(process.cwd(), "lib")
    fs.writeFileSync(`${saveDir}/page.json`, JSON.stringify(users, null, 4));
}