// 'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const  fetchJson = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 0 }})
  // console.log(res.text())
  return res.json();
}

export default async function Home() {
const json = await fetchJson();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {json.map((user: any) => (
          <Link href={`http://localhost:3000/users/${user.id}`}  >

          {user.name}
          </Link>
        ))}
      </div>

      <div className={styles.center}>
       {/* <Link href={}/> */}
      </div>

      <div className={styles.grid}>
       
      </div>
    </main>
  )
}
