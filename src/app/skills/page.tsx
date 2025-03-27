import { LightbulbIcon } from 'lucide-react'
import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import SkillsFooter from '@/components/SkillsFotter'
import { Badge } from '@/components/ui/badge'
import { portfolioConfig } from '@/config/portfolio.config'
import { fetchApi } from '@/utils/fetch-api'

const getWakatimeSkills = async () => {
  const data = await fetchApi('/api/wakatime/stats')
  return data.skills
}

export default async function SkillsPage() {
  const wakaSkills = await getWakatimeSkills()
  return (
    <div className='h-full w-full relative flex flex-col items-start gap-5 overflow-hidden'>
      <Badge variant='secondary' className='gap-1.5 py-1'>
        <LightbulbIcon className='w-4 h-4' />
        My Skills
      </Badge>
      <div className='flex flex-col gap-3'>
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className='font-poppins text-xl w-full text-primary max-sm:text-lg'>
            {portfolioConfig.skills.description}
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className='block w-full'>
          <h1 className='gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4'>
            Programming Languages
          </h1>
          <div className='w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4'>
            <SkillsFooter
              items={portfolioConfig.skills.programmingLanguages}
              wakaSkills={wakaSkills}
            />
          </div>
        </FramerWrapper>
        <FramerWrapper className='block w-full' y={100} delay={0.32}>
          <h1 className='gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4'>
            Framework/Libraries
          </h1>
          <div className='w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4'>
            <SkillsFooter
              items={portfolioConfig.skills.frameworks}
              wakaSkills={wakaSkills}
            />
          </div>
        </FramerWrapper>
        <FramerWrapper className='block w-full' y={100} delay={0.34}>
          <h1 className='gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4'>
            Tools & Technologies
          </h1>
          <div className='w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4'>
            <SkillsFooter
              items={portfolioConfig.skills.tools}
              wakaSkills={wakaSkills}
            />
          </div>
        </FramerWrapper>
      </div>
    </div>
  )
}
