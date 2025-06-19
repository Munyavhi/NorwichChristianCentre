'use client'

import Image from 'next/image'

interface LeadershipCardProps {
  name?: string
  title?: string
  image: string
  role?: string
  shape?: 'rounded' | 'circle' | 'hexagon'
}

export default function LeadershipCard({ name, title, image, role, shape = 'rounded' }: LeadershipCardProps) {
  const getShapeClass = () => {
    switch (shape) {
      case 'circle':
        return 'rounded-full aspect-square'
      case 'hexagon':
        return 'clip-hexagon aspect-[4/5]'
      default:
        return 'rounded-2xl aspect-[3/4]'
    }
  }

  const getContainerClass = () => {
    switch (shape) {
      case 'circle':
        return 'w-64 h-64 mx-auto'
      case 'hexagon':
        return 'w-72 h-80 mx-auto'
      default:
        return 'w-full h-80'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
      <div className={`relative ${getContainerClass()} ${getShapeClass()} overflow-hidden`}>
        <Image
          src={image}
          alt={name || 'Leadership member'}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {name && title && role && (
        <div className="p-6 text-center">
          {name && <h3 className="text-2xl font-bold text-primary mb-2">{name}</h3>}
          {title && <p className="text-lg text-secondary font-semibold mb-2">{title}</p>}
          {role && <p className="text-gray-600">{role}</p>}
        </div>
      )}
    </div>
  )
} 