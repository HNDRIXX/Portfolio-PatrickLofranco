"use client";

// import Image from "next/image";
import React from "react";
import ItemCards from "../items/ItemCards";
import { STRINGS } from "../../constants/Strings";

import ProjMobileI from '../../assets/images/hrdotnetmobile.webp';
import ProjMobileII from '../../assets/images/serbisyofinder.webp';
import ProjMobileIII from '../../assets/images/librarymobile.webp';
import ProjMobileIV from '../../assets/images/pwdmobile.webp';;

function Projects() {
    return (
        <div>
            <p className="font-regular text-white text-center text-5xl">Projects</p>

            <ItemCards
                image={ProjMobileI}
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
                imageSize='30rem'
            />
            

            <ItemCards
                image={ProjMobileII}
                title={STRINGS.prjTitleTwo}
                description={STRINGS.prjDescTwo}
                imageSize='25rem'
            />

            <ItemCards
                image={ProjMobileIII}
                title={STRINGS.prjTitleThree}
                description={STRINGS.prjDescThree}
                imageSize='30rem'
            />

            <ItemCards
                image={ProjMobileIV}
                title={STRINGS.prjTitleFour}
                description={STRINGS.prjDescFour}
                imageSize='25rem'
            />
        </div>
    )
}

export default Projects
