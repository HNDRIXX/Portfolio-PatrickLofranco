import React from 'react'
import { CardBody, CardContainer, CardItem } from "../ui/Card";

import '../../constants/styles/ItemCards.css'

type Props = {
    image: string
    title: string
    description: string
}

function ItemCards({ image, title, description }: Props) {
    return (
        <div className='h-screen flex items-center justify-center'>
            <CardContainer className="inter-var">
                <CardBody
                    className="card-body w-auto sm:w-[30rem] h-auto ease-in-out"
                >
                    <CardItem translateZ="50" className="w-full mt-4">
                        <img
                            src={image}
                            height="1000"
                            width="1000"
                            className="image-card h-[30rem] w-screen object-contain rounded-xl ease-in-out"
                            alt="thumbnail"
                        />
                    </CardItem>

                </CardBody>
            </CardContainer>

            <div className='ml-10'>
                <p className="text-xl font-regular text-white dark:text-white">{title}</p>
                <p className="text-white text-sm max-w-sm mt-2 font-extralight dark:text-white">{description}</p>
            </div>
        </div>
    )
}

export default ItemCards