// import fs from 'fs';
import users from './user.json';

export const usersRepo = {
    getAll: ()=> users,
    find: x => users.find(x),
    create,
}

function create(user) {
    user.id = users.length ? Math.max(...users.map( x => x.id )) + 1 : 1;
    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();
    users.push(user);
    save();
    return `saved ${JSON.stringify(users) }`;
}

// export const userRepo = {
//     getAll: ()=> users,
//     getById: (id)=> users.find(user => user.id.toString() === id.toString()),
//     find: x => users.find(x),
//     create,
//     update,
//     delete: _delete 
// }

// function create(user) {
//     user.id = users.length ? Math.max(...users.map( x => x.id )) + 1 : 1;
    
//     // set date created and updated
//     user.dateCreated = new Date().toISOString();
//     user.dateUpdated = new Date().toISOString();
//     users.push(user);
//     save();
// }

// function update(id,params) {
//     const user = users.find( x => x.id.toString() === id.toString());
//     user.dateUpdated = new Date().toISOString();
//     Object.assign(user, params);
//     save();
// }

// function _delete(id) {
//     users = users.filter(x => x.id.toString() !== id.toString());
//     save()
// }

function save() {
    fs.writeFileSync('./user.json', JSON.stringify(users, null, 4));
}