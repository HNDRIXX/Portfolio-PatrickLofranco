import { memo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CardBody, CardContainer, CardItem } from '../ui/Card';
import IconGithub from '../../assets/icons/githubblack.svg'
import '../../constants/styles/Styles.css';

type Props = {
    image: string
    title: string
    description: string
    height?: number
    width? : number
    icons? : any[]
}

const ItemCards = memo(({ image, title, description, height, width, icons }: Props) => {
    return (
        <Fade>
            <div className='
                h-full my-[4em] items-center justify-center overflow-hidden
                lg:flex
            '>
                <CardContainer>
                    <CardBody className={`card-body w-auto h-auto ease-in-out`}>
                        <CardItem translateZ='50' className='w-full'>
                            <LazyLoadImage
                                src={image}
                                width={width}
                                height={height}
                                className={`image imageCard rounded-xl object-contain ease-in-out px-3`}
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
                            {title}
                        </p>

                        <a className='flex flex-row items-center gap-2 bg-white rounded-lg py-1 mt-2 mb-5 w-24 justify-center cursor-pointer'>
                            <LazyLoadImage
                                src={IconGithub}
                                className='w-4'
                                draggable={false}
                                alt='Preview'
                            />

                            <p className='text-black text-sm font-semibold spacing tracking-tight'>Github</p>
                        </a>
                    </div>

                    <p className='text-white text-xs mt-2 font-extralight dark:text-white
                        md:text-sm
                        lg:text-s lg:max-w-lg
                    '>
                        {description}
                    </p>

                    <div className='mt-5 flex flex-row'>
                        {icons?.map((item, index) => (
                            <LazyLoadImage
                                key={index}
                                src={item.src}
                                width={30}
                                height={30}
                                className='image mr-3 w-5 md:w-5 lg:w-6 '
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
