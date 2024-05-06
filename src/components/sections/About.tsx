import React from 'react'
import ImgMe from '../../assets/images/me.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { STRINGS } from '../../constants'
import '../../constants/styles/Front.css'

function About() {
    return (
        <div className='aboutContainer flex flex-col items-center my-5'>
            <p className='aboutTitle font-regular text-white text-center text-8xl'>
                {STRINGS.sectionTitleI}
            </p>

            <div className='aboutImgContainer'>
                <LazyLoadImage
                    src={ImgMe}
                    width={600}
                    height={600}
                    className='aboutImg'
                    alt='Me'
                    draggable={false}
                />
            </div>

            <p className='aboutDesc w-2/4 text-sm relative bottom-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio fugiat autem in facere atque, adipisci assumenda obcaecati impedit ex at reiciendis aut illo unde nulla ratione? Nihil, commodi ducimus.</p>
        </div>
    )
}

export default About