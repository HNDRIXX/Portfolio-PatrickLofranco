import ImgMe from '../../assets/images/me.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { STRINGS } from '../../constants'
import '../../constants/styles/Styles.css'

function About() {
    return (
        <div className='aboutContainer'>
            <p className='aboutTitle'>
                {STRINGS.sectionTitleI}
            </p>

            <div className='aboutImgContainer snapScroll'>
                <LazyLoadImage
                    src={ImgMe}
                    width={630}
                    height={630}
                    className='aboutImg'
                    alt='Me'
                    draggable={false}
                />
            </div>

            <p className='aboutDesc'>
                {STRINGS.aboutDesc}
            </p>
        </div>
    )
}

export default About