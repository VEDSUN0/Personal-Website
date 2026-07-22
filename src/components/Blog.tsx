import { useState } from 'react'
import { posts } from '../content'

export default function Blog() {
  const [openTitle, setOpenTitle] = useState<string | null>(null)

  return (
    <section id="blog" className="section">
      <h2 className="section-title section-title--accent">/BLOG</h2>
      <div className="blog-list">
        {posts.map((post) => {
          const open = openTitle === post.title
          return (
            <article key={post.title} className="blog-item-wrap">
              <button
                type="button"
                className="blog-item"
                aria-expanded={open}
                onClick={() => setOpenTitle(open ? null : post.title)}
              >
                <span className="blog-item-title">{post.title}</span>
                <span className="blog-item-date">{post.date}</span>
              </button>
              {open && (
                <div className="blog-item-body">
                  {post.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </article>
          )
        })}
        <div className="blog-more">// more soon</div>
      </div>
    </section>
  )
}
