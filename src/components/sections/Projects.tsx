// import Image from "next/image";

import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { FixedSizeList as List } from "react-window";

import ItemCards from "../items/ItemCards";
import { STRINGS } from "../../constants/Strings";
import ProjMobileI from '../../assets/images/hrdotnetmobile.png';
import ProjMobileII from '../../assets/images/serbisyofinder.png';
import ProjMobileIII from '../../assets/images/librarymobile.png';
import ProjMobileIV from '../../assets/images/pwdmobile.png';
import ProjWebI from '../../assets/images/bhive.jpg';
import ProjWebII from '../../assets/images/udmclinic.jpg';

function Projects() {
    const [data, setData] = useState([
        {
            image: ProjMobileI,
            title: STRINGS.prjTitleOne,
            description: STRINGS.prjDescOne,
            height: '30rem'
        },
        {
            image: ProjMobileII,
            title: STRINGS.prjTitleTwo,
            description: STRINGS.prjDescTwo,
            height: '25rem'
        },
        {
            image: ProjMobileIII,
            title: STRINGS.prjTitleThree,
            description: STRINGS.prjDescThree,
            height: '30rem'
        },
        {
            image: ProjMobileIV,
            title: STRINGS.prjTitleFour,
            description: STRINGS.prjDescFour,
            height: '25rem'
        },
        {
            image: ProjWebI,
            title: STRINGS.projTitleWebI,
            description: STRINGS.projDescWebI,
            height: '20rem',
            width: '40rem',
            leftSpace: '10'
        },
        {
            image: ProjWebII,
            title: STRINGS.projTitleWebI,
            description: STRINGS.projDescWebI,
            height: '20rem',
            width: '40rem',
            leftSpace: '10'
        },
    ])

    return (
        <div>
            <p className="font-regular text-white text-center text-5xl">Projects</p>

            {data.map((item, index) => (
                <LazyLoadComponent>
                    <ItemCards
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        height={item.height}
                        width={item.width}
                        leftSpace={item.leftSpace}
                        key={index}
                    />
                </LazyLoadComponent>

            ))}
        </div>
    )
}

export default Projects
