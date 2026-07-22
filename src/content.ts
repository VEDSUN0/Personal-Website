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
  /** article paragraphs, rendered when the post is expanded */
  body: string[]
}

export const posts: Post[] = [
  {
    title: 'What a semester of data science actually taught me',
    date: 'jul 2026',
    body: [
      'I went into the semester thinking data science was mostly modeling. Pick an algorithm, tune some hyperparameters, watch the accuracy number go up. That is maybe ten percent of it, and honestly the least interesting ten percent.',
      'The real lesson was that every dataset is a small argument with reality. The UCF grade distribution data I scraped for Course Compass had professors listed under three different spellings of the same name. The NOAA weather feeds for Orlando Raincheck silently changed a column format halfway through the year. Nothing in a textbook prepares you for the moment you realize your beautiful model has been training on duplicated rows for a week.',
      'What actually moved the needle: writing sanity checks before writing models, plotting the raw data before trusting any summary statistic, and keeping a notebook of every weird thing a dataset did to me. That notebook is now longer than any of my project code.',
      'The other surprise was how much of the job is communication. A chart that takes thirty seconds to understand beats a model that is two percent more accurate but that nobody trusts. I spent the last month of the semester redoing visualizations, not retraining anything, and it was the most valuable month of the term.',
      'Next semester I want to go deeper on the engineering side — pipelines that do not fall over when a source changes shape. Because they always change shape.',
    ],
  },
  {
    title: 'Cleaning data is the job (everything else is dessert)',
    date: 'jun 2026',
    body: [
      'There is a running joke that data scientists spend eighty percent of their time cleaning data. I used to think that was a complaint. After this year I think it is just the job description, and the sooner you make peace with it the better your work gets.',
      'Cleaning is where you actually learn the data. When I was deduplicating professor names for Course Compass, I was not just fixing strings — I was learning that cross-listed courses exist, that adjuncts get recycled section codes, and that the registrar has opinions about apostrophes. Every one of those discoveries changed how I interpreted the final dashboard.',
      'My rules so far, learned the hard way: never edit the raw files, make every transformation a script you can rerun, and log what you dropped and why. The one time I cleaned a dataset by hand in a spreadsheet, I could not reproduce my own results two weeks later. Never again.',
      'The dessert metaphor holds up. Modeling is genuinely fun — it is the sweet part at the end. But nobody serves dessert first, and a model built on dirty data is just frosting on cardboard. The unglamorous scripts that validate, dedupe, and reshape are the actual meal.',
      'So when someone asks what I do in my projects, the honest answer is: I clean data, carefully, and then I get to have a little fun at the end.',
    ],
  },
]
