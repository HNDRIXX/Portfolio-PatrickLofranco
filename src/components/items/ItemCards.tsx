import React from 'react'
import { CardBody, CardContainer, CardItem } from "../ui/Card";

type Props = {
    image: string
    title: string
    description: string
}

function ItemCards({ image, title, description } : Props) {
    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-zinc-800 flex items-center relative group/card xl:w-[50rem] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] p-6 h-auto rounded-xl border"
            >
                <CardItem translateZ="50" className="w-screen mt-4">
                    <img
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-70 w-full object-cover rounded-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex-row ml-10 w-[50rem]">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white dark:text-white"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white text-sm max-w-sm mt-2 dark:text-white"
                    >
                        {description}
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default ItemCards