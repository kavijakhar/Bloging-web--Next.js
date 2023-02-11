
import * as fs from 'fs';


export default async function handler(req, res) {

  let data = await fs.promises.readdir('blogdata')
  let mydata = [];


  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    let myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8')
    mydata.push(JSON.parse(myfile))

  }
  res.status(200).send(mydata);

}