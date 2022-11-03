import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div >
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..</p>
    <p className={styles.text}>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..</p>
    <Link className={styles.btn} href="/ninjas">
    See Ninja Listing
    </Link>
    </div>
</>
  )
}
