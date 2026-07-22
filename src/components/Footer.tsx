import type { ThemeKey } from '../theme'

type FooterProps = {
  theme: ThemeKey
  onToggleTheme: () => void
  showVisitor: boolean
}

export default function Footer({ theme, onToggleTheme, showVisitor }: FooterProps) {
  return (
    <footer className="footer">
      <span>© vedant sundar — no rights reserved, honestly</span>
      <div className="footer-right">
        {showVisitor && <span>you are visitor #000042</span>}
        <button className="theme-toggle" onClick={onToggleTheme}>
          {theme === 'night' ? '☀ day' : '☾ night'}
        </button>
      </div>
    </footer>
  )
}
