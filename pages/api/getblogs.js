// http://localhost:3000/api/getblogs?slug=how%20to%20learn%20react vailid slug

import * as fs from 'fs';

export default function handler(req, res) {

  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8', (err,data)=>{
    if(err){
      res.status(500).json({error: "No such blog found"})
    }
    console.log(req.query.slug) 
    res.status(200).json(JSON.parse(data))
  })

}    