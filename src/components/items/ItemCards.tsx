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
                className="bg-zinc-800 bg-opacity-20 flex items-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[70rem] sm:w-[30rem] h-auto rounded-xl p-6 border  "
            >
                <CardItem translateZ="50" className="w-full mt-4">
                    <img
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex-row ml-10 w-[50rem]">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-regular text-white dark:text-white"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white text-sm max-w-sm mt-2 font-extralight dark:text-white"
                    >
                        {description}
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default ItemCards