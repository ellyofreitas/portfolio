import {
  SiCredly,
  SiGithub,
  SiUpwork,
  SiWakatime,
  SiX,
} from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import { portfolioConfig } from '@/config/portfolio.config'
import { cn } from '@/lib/utils'
import FramerWrapper from './animation/FramerWrapper'
import { buttonVariants } from './ui/button'

const SocialLinks = () => {
  const links = [
    {
      name: 'Upwork',
      link: portfolioConfig.socialLinks.upwork,
      icon: <SiUpwork />,
    },
    {
      name: 'X',
      link: portfolioConfig.socialLinks.x,
      icon: <SiX />,
    },
    {
      name: 'Linkedin',
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: 'Github',
      link: portfolioConfig.socialLinks.github,
      icon: <SiGithub />,
    },
    {
      name: 'Credly',
      link: portfolioConfig.socialLinks.credly,
      icon: <SiCredly />,
    },
    {
      name: 'Wakatime',
      link: portfolioConfig.socialLinks.wakatime,
      icon: <SiWakatime />,
    },
  ].filter((link) => link.link)
  return (
    <>
      {links.map((link, indx) => {
        const timing = 0.55 + indx * 0.125
        return (
          <FramerWrapper key={link.name} delay={timing} y={50}>
            <Link
              target='blank'
              href={link.link}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' })
              )}
            >
              {link.icon}
            </Link>
          </FramerWrapper>
        )
      })}
    </>
  )
}

export default SocialLinks
