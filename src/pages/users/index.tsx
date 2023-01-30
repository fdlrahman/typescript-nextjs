import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

interface UsersProps {
  dataUsers: Array<any>
}

export default function user(props: UsersProps) {
  const { dataUsers } = props
  const router = useRouter()

  const nav = (url: number) => router.push(`users/${url}`)

  return (
    <Layout pageTitle='Users Page'>
        <h1>Users Page</h1>

        <ol className='list-data'>
          {
            dataUsers.map(({ id, name, phone }, idx) => <li onClick={() => nav(id)} key={idx}>{name} <br /> {phone}</li>)
          }
        </ol>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await res.json()

  return {
    props: {
      dataUsers
    }
  }
}
