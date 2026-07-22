import { posts } from '../content'

export default function Blog() {
  return (
    <section id="blog" className="section">
      <h2 className="section-title section-title--accent">/BLOG</h2>
      <div className="blog-list">
        {posts.map((post) => (
          <a key={post.title} className="blog-item" href={post.href}>
            <span className="blog-item-title">{post.title}</span>
            <span className="blog-item-date">{post.date}</span>
          </a>
        ))}
        <div className="blog-more">// more soon</div>
      </div>
    </section>
  )
}
