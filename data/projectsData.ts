interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Search Engine',
    description: `あなたはGoogleという検索エンジンを使ったことがありますか？
    それはとても便利な検索エンジンです。
    あなたも使ってみませんか？`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
]

export default projectsData
