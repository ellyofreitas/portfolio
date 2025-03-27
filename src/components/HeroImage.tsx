import Image from 'next/image'
import { environment } from '@/config/environment'

const HeroImage = () => {
  const logoSrc = new URL('hero-image.jpg', environment.NEXT_PUBLIC_SITE_URL)
  return (
    <>
      <Image
        src={logoSrc.href}
        alt='logo'
        loading='eager'
        priority
        height={1000}
        width={1000}
        className='drop-shadow-2xl shadow-gray-800/50 rounded-lg'
      />
    </>
  )
}
export default HeroImage
