// import Image from "next/image";

import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { FixedSizeList as List } from "react-window";

import ItemCards from "../items/ItemCards";
import { STRINGS } from "../../constants/Strings";
import ProjMobileI from '../../assets/images/hrdotnetmobile.webp';
import ProjMobileII from '../../assets/images/serbisyofinder.webp';
import ProjMobileIII from '../../assets/images/librarymobile.webp';
import ProjMobileIV from '../../assets/images/pwdmobile.webp';


function Projects() {
    const [data, setData] = useState([
        {
            image: ProjMobileI,
            title: STRINGS.prjTitleOne,
            description: STRINGS.prjDescOne,
            imageSize: '30rem'
        },
        {
            image: ProjMobileII,
            title: STRINGS.prjTitleTwo,
            description: STRINGS.prjDescTwo,
            imageSize: '25rem'
        },
        {
            image: ProjMobileIII,
            title: STRINGS.prjTitleThree,
            description: STRINGS.prjDescThree,
            imageSize: '30rem'
        },
        {
            image: ProjMobileIV,
            title: STRINGS.prjTitleFour,
            description: STRINGS.prjDescFour,
            imageSize: '25rem'
        },
    ]);

    return (
        <div>
            <p className="font-regular text-white text-center text-5xl">Projects</p>

            {data.map((item, index) => (
                <ItemCards
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    imageSize={item.imageSize}
                    key={index}
                />
            ))}
        </div>
    )
}

export default Projects
