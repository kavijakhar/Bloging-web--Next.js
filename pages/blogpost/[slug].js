import React from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/blog.module.css'


const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.main}>
        <h1>Title of the page</h1>
        <hr />    
        <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, sit ipsa! Accusantium neque suscipit maiores debitis obcaecati, sapiente repellendus, accusamus odio, quia voluptatem distinctio asperiores deserunt qui doloremque animi eos.
        </div>
    </div>;
};

export default slug;  