import { memo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CardBody, CardContainer, CardItem } from '../ui/Card';
import '../../constants/styles/ItemCards.css';

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
            <div className='h-full my-[4em] flex items-center justify-center'>
                <CardContainer>
                    <CardBody className={`card-body w-auto h-auto ease-in-out`}>
                        <CardItem translateZ='50' className='w-full'>
                            <LazyLoadImage
                                src={image}
                                width={width}
                                height={height}
                                className={`image-card rounded-xl object-contain ease-in-out`}
                                draggable={false}
                                alt='Preview'
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <div className={`ml-12`}>
                    <p className='text-3xl font-medium text-white dark:text-white'>{title}</p>

                    <p className='text-white text-s max-w-lg mt-2 font-extralight dark:text-white'>
                        {description}
                    </p>

                    <div className='mt-5 flex flex-row'>
                        {icons?.map((item, index) => (
                            <LazyLoadImage
                                key={index}
                                src={item.src}
                                width={30}
                                height={30}
                                className='mr-3'
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
