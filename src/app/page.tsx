import FramerWrapper from '@/components/animation/FramerWrapper'
import GithubBtn from '@/components/animation/GithubBtn'
import DownLoadResumeBtn from '@/components/DownLoadResumeBtn'
import HeroImage from '@/components/HeroImage'
import HeroTexts from '@/components/HeroTexts'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <>
      <FramerWrapper
        className='h-full w-auto flex flex-col justify-start gap-4'
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className='h-fit w-full p-4 flex gap-4'>
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>
      <FramerWrapper
        className='h-full w-[47%] relative block max-lg:hidden'
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>
      <GithubBtn />
    </>
  )
}
