import React from 'react'
import Link from 'next/link'

interface LinkCardProps {
  url: string
  title: string
  description: string
  image?: string
  icon?: string
  isExternal: string
}

const LinkCard: React.FC<LinkCardProps> = ({
  url,
  title,
  description,
  image,
  icon,
  isExternal,
}) => {
  const domain = new URL(url).hostname

  return (
    <span className="my-4 block rounded-lg border shadow-md transition-shadow hover:shadow-lg">
      <Link
        href={url}
        {...(isExternal === 'true' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        passHref
        className="contents"
      >
        <span className="flex flex-row overflow-hidden">
          {/* 画像部分 */}
          {image && (
            <span className="inline-block w-24 flex-shrink-0 md:w-40">
              <img
                src={image}
                alt={title}
                className="m-0 h-full w-24 object-cover md:w-40"
                loading="lazy"
              />
            </span>
          )}
          <span className="p-2 md:p-3">
            {/* タイトル */}
            <span className="block max-h-6 overflow-hidden whitespace-pre-wrap break-words text-base font-bold text-blue-600 hover:underline">
              {title}
            </span>
            {/* 説明文 */}
            {description && (
              <span className="block max-h-8 overflow-hidden whitespace-pre-wrap break-words text-sm leading-4  text-gray-600">
                {description}
              </span>
            )}
            {/* ドメインとアイコン */}
            <span className="mt-1 flex items-center">
              {icon && <img src={icon} alt={domain} className="m-1 mr-1 h-4 w-4" loading="lazy" />}
              <span className="text-sm text-gray-500">{domain}</span>
            </span>
          </span>
        </span>
      </Link>
    </span>
  )
}

export default LinkCard
