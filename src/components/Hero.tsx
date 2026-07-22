import { links, navItems } from '../content'
import { scrollToId } from '../theme'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="eyebrow">ORLANDO, FL · EST. 2026</div>
        <h1 className="hero-title">
          Hi, I'm
          <br />
          Vedant
        </h1>
        <p className="hero-sub">
          Data science student at UCF. I build things with data and write about
          the process. This site is a work in progress.
        </p>
        <div className="hero-links">
          <a
            className="btn"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            className="btn"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
          <a className="btn btn--accent" href={`mailto:${links.email}`}>
            EMAIL ME
          </a>
        </div>
      </div>

      <nav className="hero-nav">
        {navItems.map((item, i) => (
          <a
            key={item.id}
            className={`nav-item${i % 2 === 0 ? ' nav-item--alt' : ''}`}
            href={`#${item.id}`}
            onClick={scrollToId(item.id)}
          >
            <span className={`nav-label${item.accent ? ' nav-label--accent' : ''}`}>
              {item.label}
            </span>
            <span className="nav-desc">{item.desc}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
