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
    <div className="my-4 rounded-lg border shadow-md transition-shadow hover:shadow-lg">
      <Link
        href={url}
        {...(isExternal === 'true' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        passHref
      >
        <div className="flex max-h-36 flex-col overflow-hidden md:flex-row">
          {/* 画像部分 */}
          {image && (
            <div className="flex-shrink-0 md:w-36">
              <img
                src={image}
                alt={title}
                className="m-0 h-24 w-full object-cover md:h-full md:w-36"
                loading="lazy"
              />
            </div>
          )}
          <div className="p-3">
            {/* タイトル */}
            <h4 className="m-t-0 line-clamp-1 text-base font-bold text-blue-600 hover:underline">
              {title}
            </h4>
            {/* 説明文 */}
            {description && (
              <span className="mt-0.5 line-clamp-2 text-sm text-gray-600">{description}</span>
            )}
            {/* ドメインとアイコン */}
            <div className="mt-1 flex items-center">
              {icon && <img src={icon} alt={domain} className="mr-1 h-4 w-4" loading="lazy" />}
              <span className="text-sm text-gray-500">{domain}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LinkCard
