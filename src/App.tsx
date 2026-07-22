import Hero from './components/Hero'
import Now from './components/Now'
import Projects from './components/Projects'
import Blog from './components/Blog'
import About from './components/About'
import Footer from './components/Footer'
import { useTheme } from './theme'

/**
 * Site-level config that was exposed as editable props in the original
 * .dc.html. `accent` only overrides night mode; leave undefined for the default.
 */
const config = {
  accent: undefined as string | undefined, // e.g. '#8fae8f' | '#d98a7a' | '#8fb4d9'
  showVisitor: true,
}

export default function App() {
  const { theme, toggle } = useTheme(config.accent)

  return (
    <div className="site">
      <Hero />
      <Now />
      <Projects />
      <Blog />
      <About />
      <Footer theme={theme} onToggleTheme={toggle} showVisitor={config.showVisitor} />
    </div>
  )
}
