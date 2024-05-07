import { Fade } from 'react-awesome-reveal';
import { STRINGS, ARRAY } from '../../constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Socials() {
  return (
    <Fade>
      <div className='flex flex-col items-center justify-center h-full my-48'>
        <p className="font-regular text-white text-center text-4xl lg:text-6xl">
          {STRINGS.sectionTitleIII}
        </p>

        <p className='my-8 mx-8 lg:mx-60 md:mx-32 text-center font-extralight text-'>
          {STRINGS.socialDesc}
        </p>

        <div className='flex gap-7 lg:gap-10'>
          {ARRAY.Socials.map((item, index) => (
            <LazyLoadImage
              key={index}
              src={item.src}
              width={50}
              height={50}
              className='w-9 lg:w-12'
            />
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Socials