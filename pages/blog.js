import React, { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })


// collect all the files from the data directory 
// step 2 : itrateed through them and display them 


const Blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.allblogs)
  return (

    <main className={styles.main}>
      <div className={styles.grid}>
        {
          blogs.map((blogpost) => {
            return (
              <a href={`blogpost/${blogpost.slug}`}
                key={blogpost.title} className={styles.card}
              >
                <h2 className={styles.title}>
                  {blogpost.title}
                </h2>
                <p className={styles.content} >
                  {blogpost.content.substr(0, 140)}....
                </p>
              </a>
            )
          })
        }
      </div>
    </main >
  )
}
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allblogs = await data.json();
  return {
    props: { allblogs }
  }
}

export default Blog
