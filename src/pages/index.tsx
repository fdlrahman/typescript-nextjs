import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout pageTitle='Home Page'>
        <Image src="/profile.jpeg" width={200} height={200} alt="Profile Picture" />
        <h1 className={styles['title-homepage']}>Welcome, Fadel!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempore a sit! Rerum impedit atque fuga sit dicta. Rerum saepe necessitatibus error culpa. Ducimus consectetur corporis tenetur commodi assumenda. Error.
        </p>
    </Layout>
  )
}
