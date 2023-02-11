import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/blog.module.css'


const slug = (props) => {
    const [Blog, setBlog] = useState(props.OneBlog)
    return <div className={styles.main}>
        <h1>{Blog && Blog.title}</h1>
        <hr className={styles.hr}/> 
        <div className={styles.content}>
        {Blog && Blog.content}...
        </div>
    </div>;
};  


export async function getServerSideProps(context) {
    const {slug} = context.query
    console.log(slug)
    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
    let OneBlog = await data.json();
    return {
      props: { OneBlog }
    }
  }


export default slug; 