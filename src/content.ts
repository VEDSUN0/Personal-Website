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
  { id: 'projects', label: '/PROJECTS', desc: 'data, dashboards, and small tools', accent: false },
  { id: 'blog', label: '/BLOG', desc: 'essays & notes, occasionally', accent: true },
  { id: 'about', label: '/ABOUT', desc: 'the longer story →', accent: false },
]

export type Project = {
  num: string
  title: string
  desc: string
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'Course Compass',
    desc: 'Scrapes UCF grade distributions and visualizes which professor/section combos to take. Python, pandas, and a Plotly dashboard.',
  },
  {
    num: '02',
    title: 'Shelf Life',
    desc: 'A reading tracker that charts pace, streaks, and genre drift over time. React + a tiny SQLite backend.',
  },
  {
    num: '03',
    title: 'Orlando Raincheck',
    desc: 'Predicts afternoon thunderstorms from NOAA data so you know when to leave campus. Scikit-learn, honest about being wrong.',
  },
]

export type Post = {
  title: string
  date: string
  href: string
}

export const posts: Post[] = [
  { title: 'What a semester of data science actually taught me', date: 'jul 2026', href: '#' },
  { title: 'Cleaning data is the job (everything else is dessert)', date: 'jun 2026', href: '#' },
]
