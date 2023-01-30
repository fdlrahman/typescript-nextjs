import { useState, useMemo } from "react"
import Layout from "@/components/Layout"
import BlogCard from "@/components/BlogCard"

interface Blog {
  title: String,
  body: String
}

interface BlogProps {
  blogs: Blog[]
}

export default function blog(props: BlogProps) {
  const { blogs } = props
  const limit = 10;
  const [pageLimit, setPageLimit] = useState(1)
  const limitBlogs = useMemo(() => blogs.slice(0, limit * pageLimit), [pageLimit])

  return (
    <Layout pageTitle="Blog Page">
        <h1 className="title">Blogs Page</h1>

        <div className="blogs-container">
          {
            limitBlogs.map(({ title, body }) => <BlogCard title={title} body={body} />)
          }

          {
            (limit * pageLimit) < blogs.length && <p className="continue-blogs" onClick={() => setPageLimit((limit) => limit + 1)}>Continue blogs...</p>
          }
        </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await res.json()

  return {
    props: {
      blogs
    }
  }
}