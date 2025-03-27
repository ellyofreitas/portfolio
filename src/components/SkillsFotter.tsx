'use server'

import Image from 'next/image'
import type React from 'react'
import { fetchApi } from '@/utils/fetch-api'

interface MyComponentProps {
  items: Array<{ name: string; icon: string }>
  wakaSkills: Array<{ name: string; text: string }>
}

const SkillsFooter: React.FC<MyComponentProps> = async ({
  items,
  wakaSkills,
}) => {
  const languagesMap = new Map(
    wakaSkills.map((lang: any) => [lang.name.toLowerCase(), lang.text])
  )
  const skills = items.map((item) => ({
    ...item,
    hoursText: String(languagesMap.get(item.name?.toLowerCase()) ?? ''),
  }))
  return (
    <>
      {skills.map((language) => {
        return (
          <div
            key={language.name}
            className='flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors'
          >
            <Image
              src={language.icon}
              alt={language.name}
              width={48}
              height={48}
              className='w-12 h-12 object-contain'
            />
            <div className='text-center'>
              <span className='text-sm text-center font-medium text-muted-foreground'>
                {language.name}
              </span>
              {language.hoursText && (
                <p className='font-small text-sm text-muted-foreground leading-relaxed'>
                  {language.hoursText}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SkillsFooter
