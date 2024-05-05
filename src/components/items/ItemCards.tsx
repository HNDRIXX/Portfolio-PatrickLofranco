import { memo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CardBody, CardContainer, CardItem } from '../ui/Card';
import '../../constants/styles/ItemCards.css';

type Props = {
    image: string
    title: string
    description: string
    height?: string
    width? : string
    leftSpace? : string
};

const ItemCards = memo(({ image, title, description, height, width, leftSpace }: Props) => {
    return (
        <Fade>
            <div className='h-full my-[4em] flex items-center justify-center'>
                <CardContainer>
                    <CardBody className={`card-body w-${width ? `[${width}]` : '96'}  h-auto ease-in-out`}>
                        <CardItem translateZ='50' className='w-full'>
                            <LazyLoadImage
                                src={image}
                                width={1000}
                                height={1000}
                                style={{ height: height }}
                                className={`image-card w-screen rounded-xl object-contain ease-in-out`}
                                alt='Image Alt'
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <div className={`ml-10`}>
                    <p className='text-3xl font-medium text-white dark:text-white'>{title}</p>
                    <p className='text-white text-m max-w-lg mt-2 font-extralight dark:text-white'>{description}</p>
                </div>
            </div>
        </Fade>
    );
});

export default ItemCards;
