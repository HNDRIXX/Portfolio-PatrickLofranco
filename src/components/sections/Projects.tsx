// import Image from "next/image";

import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { FixedSizeList as List } from "react-window";

import ItemCards from "../items/ItemCards";
import { ARRAY, STRINGS } from "../../constants";

function Projects() {
    const [data, setData] = useState(ARRAY.Projects)

    return (
        <div>
            <p className="font-regular text-white text-center text-6xl">
                {STRINGS.sectionTitleII}
            </p>

            {data.map((item, index) => (
                <LazyLoadComponent>
                    <ItemCards
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        height={item.height}
                        width={item.width}
                        icons={item.icons}
                        key={index}
                    />
                </LazyLoadComponent>

            ))}
        </div>
    )
}

export default Projects
