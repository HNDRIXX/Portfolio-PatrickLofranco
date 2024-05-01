import React from 'react'
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CardBody, CardContainer, CardItem } from "../ui/Card";
import '../../constants/styles/ItemCards.css'

type Props = {
    image: string
    title: string
    description: string
    imageSize?: string
}

function ItemCards({ image, title, description, imageSize }: Props) {
    return (
        <Fade>
            <div className='h-full my-[4em] flex items-center justify-center'>
                <CardContainer>
                    <CardBody
                        className="card-body w-auto sm:w-[30rem] h-auto ease-in-out"
                    >
                        <CardItem translateZ="50" className="w-full">
                            <LazyLoadImage
                                src={image}
                                width={1000} height={1000}
                                style={{ height: imageSize }}
                                className={`image-card  w-screen object-contain rounded-xl ease-in-out`}
                                alt="Image Alt"
                            />
                            {/* <img
                            src={image}
                            height="1000"
                            width="1000"
                            style={{ height: imageSize }}
                            className={`image-card  w-screen object-contain rounded-xl ease-in-out`}
                            alt="thumbnail"
                        /> */}
                        </CardItem>

                    </CardBody>
                </CardContainer>

                <div className='ml-1'>
                    <p className="text-3xl font-medium text-white dark:text-white">{title}</p>
                    <p className="text-white text-m max-w-lg mt-2 font-extralight dark:text-white">{description}</p>
                </div>
            </div>
        </Fade>

    )
}

export default ItemCards