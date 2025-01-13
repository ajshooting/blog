import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const totalCharacters = sortedPosts.reduce((acc, post) => acc + post.body.raw.length, 0)
  return <Main posts={posts} totalCharacters={totalCharacters} />
}
