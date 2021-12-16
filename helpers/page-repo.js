import fs from 'fs';
import pages from '../lib/page.json';
import path from 'path';

export const pageRepo = {
    getAll: ()=> pages,
    find: x => pages.find(x),
    create,
    update,
    delet: _delete
}

function create(page) {
    page.id = pages.length ? Math.max(...pages.map( x => x.id )) + 1 : 1;
    // set date created and updated
    page.dateCreated = new Date().toISOString();
    page.dateUpdated = new Date().toISOString();
    pages.push(page);
    save();
    return JSON.stringify(page);
}


function update(id,params) {
     const page = pages.find( x => x.id.toString() === id.toString());
     if(page === undefined){
        return false
     } else {
        page.dateUpdated = new Date().toISOString();
        Object.assign(page, params);
        save();
        return `update: ${JSON.stringify(page)}`;
     }

}

function _delete(id) {
    pages = pages.filter(x => x.id.toString() !== id.toString());
    save();
    return `update: ${JSON.stringify(pages)}`;
}

function save() {
    const saveDir = path.join(process.cwd(), "lib")
    fs.writeFileSync(`${saveDir}/page.json`, JSON.stringify(pages, null, 4));
}