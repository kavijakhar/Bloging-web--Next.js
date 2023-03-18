import React, { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import * as fs from 'fs';
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })


// collect all the files from the data directory 
// step 2 : itrateed through them and display them 


const Blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.mydata)
  return (

    <main className={styles.main}>
      <div className={styles.grid}>
        {
          blogs.map((blogitem) => {
            return (
              <a href={`/blogpost/${blogitem.slug}`}
                key={blogitem.title} className={styles.card}
              >
                <h2 className={styles.title}>
                  {blogitem.title}
                </h2>
                <p className={styles.content} >
                  {blogitem.content.substr(0, 140)}....
                </p>
              </a>
            )
          })
        }
      </div>
    </main >
  )
}
export async function getStaticProps(context) {

  let data = await fs.promises.readdir('blogdata')
  let mydata = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    let myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8')
    mydata.push(JSON.parse(myfile))
  }

  return {
    props: {mydata}
  }
}

export default Blog
