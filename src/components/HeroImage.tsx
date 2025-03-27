import Image from 'next/image'
import logo from '../../public/1b75ba16-58c9-4a1d-af7e-72c11c858cee_Original.JPG'

const HeroImage = () => {
  return (
    <>
      <Image
        src={logo}
        alt='logo'
        loading='eager'
        priority
        height={1000}
        width={1000}
      />
    </>
  )
}
export default HeroImage
