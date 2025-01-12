// components/LinkCard.tsx
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
    <div className="my-4 max-h-36 overflow-hidden rounded-lg border shadow-md">
      <Link
        href={url}
        {...(isExternal === 'true' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        passHref
      >
        <div className="flex flex-col md:flex-row">
          {image && (
            <div className="flex-shrink-0 md:w-48">
              <img src={image} alt={title} className="max-h-36 object-cover" />
            </div>
          )}
          <div className="p-1">
            <h4 className="mt-1 text-lg font-bold text-blue-600">{title}</h4>
            {description && <p className="mt-1 text-gray-600">{description}</p>}
            <div className="mt-2 flex items-center">
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
