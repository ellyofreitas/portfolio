import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import { Badge } from '@/components/ui/badge'
import { getCredlyBadges } from '@/api-services/credly/get-credly-badges'

const formatDate = (date: string) => {
  const formatter = new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  })
  return formatter.format(new Date(date))
}

export default async function BadgesPage() {
  const credlyBadges = await getCredlyBadges()
  return (
    <div className='h-full w-full relative flex flex-col items-start gap-5 overflow-hidden'>
      <Badge variant='secondary' className='gap-1.5 py-1'>
        <BadgeCheck className='h-4 w-4' />
        Badges
      </Badge>
      <div className='flex flex-col gap-3'>
        <Heading>My Badges</Heading>
      </div>
      <div className='w-full h-fit flex flex-col'>
        {credlyBadges.map((badge, index) => (
          <div className='w-full h-fit flex' key={badge.id}>
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35 + index * 0.1}
              className='w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base'
            >
              <Link
                target='blank'
                href={`https://www.credly.com/badges/${badge.id}`}
              >
                <div className='flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors'>
                  <Image
                    src={badge.image_url}
                    alt={badge.badge_template.name}
                    width={80}
                    height={80}
                    className='w-20 h-20 object-contain'
                  />
                </div>
                {formatDate(badge.issued_at_date)}
              </Link>
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              className='relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point'
            >
              <div className='text-2xl font-rubik max-sm:text-xl'>
                {badge.badge_template.name}, <br /> {badge.issuer.summary}
              </div>
              <p className='font-poppins text-base w-full text-primary max-sm:text-xs'>
                {badge.badge_template.description}
              </p>
              <div className='flex'>
                {badge.badge_template.skills.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant='secondary'
                    className='gap-1.5 py-1'
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  )
}
