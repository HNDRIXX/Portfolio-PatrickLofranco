import ImgMe from '../../assets/images/me.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { STRINGS } from '../../constants'
import '../../constants/styles/Styles.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                    effect="blur"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}
                    draggable={false}
                    alt='Patrick William Lofranco'
                />
            </div>

            <p className='aboutDesc'>
                {STRINGS.aboutDesc}
            </p>
        </div>
    )
}

export default About