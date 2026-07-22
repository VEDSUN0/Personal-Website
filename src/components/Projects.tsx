import { projects } from '../content'

export default function Projects() {
  return (
    <section id="projects" className="section section--panel">
      <h2 className="section-title">/PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.num} className="card">
            <div className="card-num">{p.num}</div>
            <div className="card-title">{p.title}</div>
            <div className="card-desc">{p.desc}</div>
          </article>
        ))}
        <div className="card card--empty">next one is compiling…</div>
      </div>
    </section>
  )
}
