import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/blog.module.css'
import * as fs from 'fs';

const Slug = (props) => {
  const [Blog, setBlog] = useState(props.OneBlog)
  return <div className={styles.main}>
    <h1>{Blog && Blog.title}</h1>
    <hr className={styles.hr} />
    <div className={styles.content}>
      {Blog && Blog.content}...
    </div>
  </div>;
};


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how to learn css' } },
      { params: { slug: 'how to learn react' } },
      { params: { slug: 'how to learn javascript' } }
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {  
  console.log(context)
  const { slug } = context.params
  let OneBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return {
    props: { OneBlog : JSON.parse(OneBlog) }
  }
}


export default Slug; 