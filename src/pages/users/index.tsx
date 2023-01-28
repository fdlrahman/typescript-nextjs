import Layout from '@/components/Layout'

interface UsersProps {
  dataUsers: Array<any>
}

export default function user(props: UsersProps) {
  const { dataUsers } = props

  return (
    <Layout pageTitle='Users Page'>
        <h1>Users Page</h1>

        <ol className='list-data'>
          {
            dataUsers.map(({ name, phone }, idx) => <li key={idx}>{name} <br /> {phone}</li>)
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
