import Layout from '@/components/Layout'

interface User {
  id?: Number,
  name: String,
  email: String,
  phone: String,
  address: { street: String, city: String },
  website: String
}

interface UserDetailProps {
  readonly user: User
}

export default function detail(props: UserDetailProps) {
  const { user } = props

  return (
    <Layout pageTitle="User Detail">
      <h1>{user.id?.toString()}. {user.name}</h1>
      <h3 className='additional-information'>Email: {user.email}</h3>
      <h3 className='additional-information'>Phone: {user.phone}</h3>
      <h3 className='additional-information'>Address: {`${user.address.street}, ${user.address.city}`}</h3>
      <h3 className='additional-information'>Website: {user.website}</h3>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await res.json()

  const paths = dataUsers.map((user: User) => ({
    params: { id: user.id?.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

interface getStaticProps {
  params: { id: String }
}

export async function getStaticProps(context: getStaticProps) {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const user = await res.json()

  return {
    props: {
      user
    }
  }
}