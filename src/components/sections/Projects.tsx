// import Image from "next/image";

import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import ItemCards from "../items/ItemCards";
import { ARRAY, STRINGS } from "../../constants";

function Projects() {
    const [data] = useState<any>(ARRAY.Projects)

    return (
        <div>
            <p className="font-regular text-white text-center text-5xl 
                md:text-6xl
                lg:text-6xl
            ">
                {STRINGS.sectionTitleII}
            </p>

            {data.map((item: any, index: number) => (
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
