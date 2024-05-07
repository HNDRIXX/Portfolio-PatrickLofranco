import ImgMe from '../../assets/images/me.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { STRINGS } from '../../constants'
import '../../constants/styles/Styles.css'

function About() {
    return (
        <div className='aboutContainer flex flex-col items-center my-5'>
            <p className='aboutTitle'>
                {STRINGS.sectionTitleI}
            </p>

            <div className='aboutImgContainer'>
                <LazyLoadImage
                    src={ImgMe}
                    width={630}
                    height={630}
                    className='aboutImg'
                    alt='Me'
                    draggable={false}
                />
            </div>

            <p className='aboutDesc w-96 text-xs relative bottom-32 
                sm: px-10
                md:w-2/3 md:text-sm
                lg:text-sm lg:w-2/4 lg:bottom-40
            '>
                {STRINGS.aboutDesc}
            </p>
        </div>
    )
}

export default About