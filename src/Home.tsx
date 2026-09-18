import { useEffect, useRef } from 'react'
import { about, articles, current, lastUpdated, links, posts, projects } from './content.ts'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#current', label: 'Current' },
  { href: '/articles', label: 'Articles' },
  { href: '/blog', label: 'Blog' },
  { href: '#untitled', label: 'Untitled', muted: true },
]

// Fades each .reveal section in once. Content is visible by default —
// the animation never fills, so nothing stays hidden if it fails.
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const anim = (el: Element) =>
      el.animate(
        [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
        { duration: 600, easing: 'cubic-bezier(0.2,0.7,0.2,1)', fill: 'none' },
      )
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            anim(e.target)
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -12% 0px' },
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) anim(el)
      else io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return ref
}

function Bullets({ items }: { items: string[] }) {
  return (
    <div className="bullets">
      {items.map((text, i) => (
        <div key={i} className="bullet">
          <span className="sq" />
          <p className="body-copy">{text}</p>
        </div>
      ))}
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 4 5 4 5 4c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 11c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Home() {
  const ref = useReveal()

  return (
    <div className="frame" ref={ref}>
      <aside className="sidebar">
        <nav className="nav-list">
          {nav.map((item, i) => (
            <a key={item.label} className={`navlink${item.muted ? ' muted' : ''}`} href={item.href}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <span className="label">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="social">
          <a className="iconlnk" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a className="iconlnk" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <span className="dot" />
          <a className="lnk" href={`mailto:${links.email}`}>{links.email}</a>
        </div>
      </aside>

      <main>
        <section id="about" className="reveal">
          <h2 className="disp hero">Hi, I'm Vedant.</h2>
          <p className="body-copy lede">Data Science student at UCF. Interested in statistics, data and math.</p>
          <hr className="hr about-rule" />
          <span className="kick">About</span>
          <p className="body-copy about-body">{about}</p>
        </section>

        <hr className="hr" />

        <section id="projects" className="reveal">
          <span className="kick">Projects</span>
          <h3 className="disp">Things I've built.</h3>
          <div className="project-grid">
            {projects.map((p, i) => (
              <a key={i} className="card" href={p.href || '#'}>
                <span className="card-kicker">{p.kicker}</span>
                <span className="card-title">{p.title}</span>
                <p className="card-body">{p.body || <br />}</p>
              </a>
            ))}
          </div>
        </section>

        <hr className="hr" />

        <section id="current" className="reveal">
          <span className="kick">Current</span>
          <h3 className="disp">What I'm doing now.</h3>
          <Bullets items={current} />
          <p className="updated">Last updated — {lastUpdated}</p>
        </section>

        <hr className="hr" />

        <section id="articles" className="reveal">
          <span className="kick">Articles</span>
          <h3 className="disp">Reading &amp; links.</h3>
          <Bullets items={articles.slice(0, 2).map((a) => a.title)} />
          <a className="lnk see-all" href="/articles">See all articles →</a>
        </section>

        <hr className="hr" />

        <section id="blog" className="reveal">
          <span className="kick">Blog</span>
          <h3 className="disp">Writing, as it comes.</h3>
          <Bullets items={posts.slice(0, 2).map((p) => p.title)} />
          <a className="lnk see-all" href="/blog">See all posts →</a>
        </section>

        <hr className="hr" />

        <section id="untitled" className="reveal muted">
          <span className="kick">Untitled</span>
          <h3 className="disp">A spare section for later.</h3>
        </section>

        <section className="reveal contact">
          <span className="contact-label">Contact</span>
          <a className="disp contact-email" href={`mailto:${links.email}`}>{links.email}</a>
          <div className="contact-links">
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  )
}
