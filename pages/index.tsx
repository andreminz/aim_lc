import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>aim.lc</title>
        <meta name='description' content='landing aim.lc' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className='text-3xl font-bold underline'>aim.lc</h1>
      </main>
    </div>
  )
}

export default Home
