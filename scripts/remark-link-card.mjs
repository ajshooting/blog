// remark-link-card.mjs
import { visit } from 'unist-util-visit'
import getMetadata from 'metadata-scraper'

const MY_HOST = 'your-domain.com' // あなたのブログのドメインに置き換えてください

const isLinkNode = (node) => {
  return (
    node.type === 'paragraph' &&
    node.children.length === 1 &&
    node.children[0].type === 'link' &&
    node.children[0].children.length === 1 &&
    node.children[0].children[0].type === 'text'
  )
}

export function remarkLinkCard() {
  return async (tree) => {
    const nodesToProcess = []

    visit(tree, isLinkNode, (node) => {
      nodesToProcess.push(node)
    })

    await Promise.all(
      nodesToProcess.map(async (node) => {
        const linkNode = node.children[0]
        const url = linkNode.url
        const linkText = linkNode.children[0].value

        // リンクテキストとURLが同じもののみを対象とする
        if (url !== linkText) return

        try {
          const metadata = await getMetadata(url)
          const { title, description, image, icon } = metadata

          const domain = new URL(url)
          const isExternal = domain.hostname !== MY_HOST

          const linkCardNode = {
            type: 'mdxJsxFlowElement',
            name: 'LinkCard',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'url',
                value: url,
              },
              {
                type: 'mdxJsxAttribute',
                name: 'title',
                value: title || '',
              },
              {
                type: 'mdxJsxAttribute',
                name: 'description',
                value: description || '',
              },
              {
                type: 'mdxJsxAttribute',
                name: 'image',
                value: image || '',
              },
              {
                type: 'mdxJsxAttribute',
                name: 'icon',
                value: icon || '',
              },
              {
                type: 'mdxJsxAttribute',
                name: 'isExternal',
                value: isExternal ? 'true' : 'false',
              },
            ],
            children: [],
          }

          node.type = 'paragraph'
          node.children = [linkCardNode]
        } catch (error) {
          console.error(`Error fetching metadata for ${url}:`, error)
        }
      })
    )
  }
}
