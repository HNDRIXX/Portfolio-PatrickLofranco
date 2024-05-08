import { memo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CardBody, CardContainer, CardItem } from '../ui/Card';

import { STRINGS } from '../../constants';
import IconGithub from '../../assets/icons/githubblack.svg'
import '../../constants/styles/Styles.css';

type Props = {
    item: any
}

const ItemCards = memo(({ item }: Props) => {
    return (
        <Fade>
            <div className={`
                h-full items-center justify-center overflow-hidden my-10
                lg:flex lg:snap-always lg:snap-center lg:my-[10em]
            `}
            >
                <CardContainer>
                    <CardBody className={`card-body w-auto h-auto ease-in-out`}>
                        <CardItem translateZ='50' className='w-full'>
                            <LazyLoadImage
                                src={item?.image}
                                width={item?.width}
                                height={item?.height}
                                className={`image imageCard rounded-xl object-contain ease-in-out`}
                                draggable={false}
                                alt='Preview'
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <div className={`lg:px-0 lg:pl-10 md:px-32 px-10`}>
                    <div>
                        <p className='text-2xl font-medium text-white dark:text-white 
                            md:text-3xl
                            lg:text-3xl
                        '>
                            {item?.title}
                        </p>

                        <a 
                            className='flex flex-row items-center gap-2 bg-white rounded-lg py-1 mt-2 mb-5 w-24 justify-center cursor-pointer'
                            target='_blank'
                            href={item?.url}
                        >
                            <LazyLoadImage
                                src={IconGithub}
                                className='w-4'
                                draggable={false}
                                alt='Preview'
                            />

                            <p className='text-black text-sm font-semibold spacing tracking-tight'>
                                {STRINGS.github}
                            </p>
                        </a>
                    </div>

                    <p className='text-white text-xs mt-2 font-extralight dark:text-white
                        md:text-base
                        lg:text-base lg:max-w-lg
                    '>
                        {item?.description}
                    </p>

                    <div className='mt-5 flex flex-row'>
                        {item?.icons?.map((item : any, index: number) => (
                            <LazyLoadImage
                                key={index}
                                src={item.src}
                                width={30}
                                height={30}
                                className='icons image mr-3 w-5 md:w-5 lg:w-6 '
                                alt='Stack'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    )
})

export default ItemCards
