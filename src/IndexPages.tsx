import { useEffect } from 'react'
import { articles, posts } from './content.ts'

function IndexPage({ title, children }: { title: string; children: React.ReactNode }) {
  useEffect(() => {
    document.title = `${title} — Vedant Sundar`
  }, [title])

  return (
    <div className="index-page">
      <a className="backlnk" href="/">← Home</a>
      <h1 className="disp">{title}</h1>
      <p className="body-copy index-sub"></p>
      <div className="index-grid">{children}</div>
    </div>
  )
}

export function BlogPage() {
  return (
    <IndexPage title="Blog">
      {posts.map((p, i) => (
        <a key={i} className="index-card blog-card" href={p.href || '#'}>
          <span className="blog-date">{p.date}</span>
          <span className="disp blog-title">{p.title}</span>
          <p className="blog-summary">{p.summary}</p>
        </a>
      ))}
    </IndexPage>
  )
}

export function ArticlesPage() {
  return (
    <IndexPage title="Articles">
      {articles.map((a, i) => (
        <a key={i} className="index-card article-card" href={a.href || '#'}>
          <span className="disp article-title">{a.title}</span>
          <span className="article-source">{a.source}</span>
        </a>
      ))}
    </IndexPage>
  )
}
