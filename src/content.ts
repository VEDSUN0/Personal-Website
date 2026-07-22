/** All editable site copy lives here — change text without touching components. */

export const links = {
  github: 'https://github.com/VEDSUN0',
  linkedin: 'https://www.linkedin.com/in/vedant-sundar-537b91363/',
  email: 'vedsun0a@gmail.com',
}

export type NavItem = {
  id: string
  label: string
  desc: string
  accent: boolean
}

export const navItems: NavItem[] = [
  { id: 'now', label: '/NOW', desc: 'finishing spring semester · one small project brewing', accent: true },
  { id: 'projects', label: '/PROJECTS', desc: 'coming soon — the good stuff is compiling', accent: false },
  { id: 'blog', label: '/BLOG', desc: 'essays & notes, occasionally', accent: true },
  { id: 'about', label: '/ABOUT', desc: 'the longer story →', accent: false },
]

export type Project = {
  num: string
  title: string
  desc: string
}

export const projects: Project[] = [
  { num: '01', title: 'Project title', desc: "One line on what it does and what it's built with." },
  { num: '02', title: 'Project title', desc: "One line on what it does and what it's built with." },
]

export type Post = {
  title: string
  date: string
  href: string
}

export const posts: Post[] = [
  { title: 'On reading slowly', date: 'may 2026', href: '#' },
  { title: 'Notes from freshman year', date: 'apr 2026', href: '#' },
]
