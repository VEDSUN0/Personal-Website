import { useCallback, useEffect, useState, type MouseEvent } from 'react'

export type ThemeKey = 'night' | 'day'

/**
 * Each theme is a map of CSS custom properties applied to <html>.
 * This mirrors the original .dc.html theme system so day/night parity is exact.
 */
export const themes: Record<ThemeKey, Record<string, string>> = {
  night: {
    '--bg': '#14161c',
    '--panel': '#1a1d26',
    '--panel2': '#20242f',
    '--fg': '#dcd9d0',
    '--mute': '#8a8fa3',
    '--soft': '#c6c3ba',
    '--line': '#dcd9d0',
    '--accent': '#e8c87a',
    '--accent-fg': '#14161c',
    '--shadow': '#262a35',
  },
  day: {
    '--bg': '#f2efe6',
    '--panel': '#e9e5d8',
    '--panel2': '#e0dbcb',
    '--fg': '#141414',
    '--mute': '#7a756a',
    '--soft': '#4c483f',
    '--line': '#141414',
    '--accent': '#8a6d1f',
    '--accent-fg': '#f2efe6',
    '--shadow': '#141414',
  },
}

const STORAGE_KEY = 'vs-theme'

/**
 * Manages the active theme: applies CSS variables to <html>, persists the
 * choice to localStorage, and (in night mode only) honours a custom accent.
 */
export function useTheme(accent?: string) {
  const [theme, setTheme] = useState<ThemeKey>('night')

  const apply = useCallback(
    (key: ThemeKey) => {
      const t = themes[key] ?? themes.night
      const root = document.documentElement
      for (const k in t) root.style.setProperty(k, t[k])
      if (accent && key === 'night') root.style.setProperty('--accent', accent)
      try {
        localStorage.setItem(STORAGE_KEY, key)
      } catch {
        /* storage unavailable — ignore */
      }
      setTheme(key)
    },
    [accent],
  )

  useEffect(() => {
    let saved: ThemeKey = 'night'
    try {
      saved = (localStorage.getItem(STORAGE_KEY) as ThemeKey) || 'night'
    } catch {
      /* storage unavailable — ignore */
    }
    apply(saved)
  }, [apply])

  const toggle = useCallback(
    () => apply(theme === 'night' ? 'day' : 'night'),
    [apply, theme],
  )

  return { theme, toggle }
}

/** Smooth-scrolls to a section by id, offset slightly from the top. */
export function scrollToId(id: string) {
  return (e: MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 12,
        behavior: 'smooth',
      })
    }
  }
}
