import React from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


// collect all the files from the data directory 
// step 2 : itrateed through them and display them 


const Blog = () => {
  return (
    <main className={styles.main}>
     

    <div className={styles.grid}>
      <a
       href='/blogpost/learn-js' className={styles.card}
      >
        <h2 className={inter.className}>
          1. Next Js Image Component <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

      <a
        className={styles.card}
        >
        <h2 className={inter.className}>
          2. Next Js Image Component <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

      <a
        className={styles.card}
      >
        <h2 className={inter.className}>
          3. Next Js Image Component<span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

      <a
        className={styles.card}
      >
        <h2 className={inter.className}>
          4. Next Js Image Component<span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

      <a
        className={styles.card}
      >
        <h2 className={inter.className}>
          4. Next Js Image Component<span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

      <a
        className={styles.card}
      >
        <h2 className={inter.className}>
          4. Next Js Image Component<span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

      <a
        className={styles.card}
      >
        <h2 className={inter.className}>
          4. Next Js Image Component<span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

      <a
        className={styles.card}
      >
        <h2 className={inter.className}>
          4. Next Js Image Component<span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
        </p>
      </a>

    </div> 
    </main>
  )
}

export default Blog
