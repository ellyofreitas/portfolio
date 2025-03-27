'use client'

import {
  Badge,
  BadgeCheck,
  BadgeInfo,
  FileBadge,
  FileBadge2,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from '@/components/animation/DockAnimation'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const data = [
    {
      title: 'Home',
      icon: <HomeIcon className='h-full w-full' />,
      href: '/',
    },
    {
      title: 'About',
      icon: <User className='h-full w-full' />,
      href: '/about',
    },
    {
      title: 'Skills',
      icon: <LightbulbIcon className='h-full w-full' />,
      href: '/skills',
    },
    {
      title: 'Badges',
      icon: <BadgeCheck className='h-full w-full' />,
      href: '/badges',
    },
    {
      title: 'Projects',
      icon: <FolderGit2 className='h-full w-full' />,
      href: '/projects',
    },
  ]
  const [scrolling, setScrolling] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? 'hidden' : 'block'}`}
    >
      <Dock className='items-end pb-3 rounded-full'>
        {data.map((item) => (
          <Link href={item.href} key={item.title}>
            <DockItem
              className={cn(
                'aspect-square rounded-full bg-gray-200 dark:bg-neutral-800',
                pathname === item.href &&
                  'bg-gray-100 !border !border-primary-sky'
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(pathname === item.href && 'text-[#2f7df4]')}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  )
}
