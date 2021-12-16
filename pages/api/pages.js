import {pageRepo} from '../../helpers/page-repo';
import { getSession } from "next-auth/react"

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    if (req.method === 'POST') {
        const {...page} = req.body
        if (pageRepo.find(x => x.title === page.title)) {
          res.status(400).json({ error: `Page with the page title: ${page.title} already exists.` });
        } 
        else {
            res.status(201).json({success: true, saved: pageRepo.create(page)});
        }
        
    } else {
      res.status(405).json({ error: '405: Method Not Allowed.' });
    }   
    
  } else {
    // Not Signed in
    res.status(401).json({ error: '401 Unauthorized: Credentials Wrong.' });
  }
  res.end();
}