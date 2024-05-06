import React from 'react'

import { Fade } from 'react-awesome-reveal';
import { STRINGS, ARRAY } from '../../constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Socials() {
  return (
    <Fade>
      <div className='flex flex-col items-center justify-center h-full my-60'>
        <p className="font-regular text-white text-center text-6xl">
          {STRINGS.sectionTitleIII}
        </p>

        <p className='mt-10 px-20 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod animi quos dolorum aspernatur itaque asperiores recusandae officia, iste praesentium aliquam porro ipsum error quae sint. Sit fugiat asperiores odit deleniti.</p>

        <div className='flex gap-10 mt-10'>
          {ARRAY.Socials.map((item, index) => (
            <LazyLoadImage
              key={index}
              src={item.src}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Socials