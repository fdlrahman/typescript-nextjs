import style from './Blog.module.css'

interface BlogCardProps {
  title: String,
  body: String
}

export default function BlogCard(props: BlogCardProps) {
  const {title, body} = props
  return (
    <div className={style['blog-card']}>
      <h1 className={style['blog-card-title']}>{title}</h1>
      <p className={style['blog-card-paragraph']}>{body}</p>
    </div>
  );
}
