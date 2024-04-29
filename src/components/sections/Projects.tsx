"use client";

// import Image from "next/image";
import React from "react";

import ItemCards from "../items/ItemCards";
import { STRINGS } from "../../constants/Strings";

import ProjMobileI from '../../assets/images/hrdotnetmobile.png';
import ProjMobileII from '../../assets/images/serbisyofinder.png';
import ProjMobileIII from '../../assets/images/librarymobile.png'

function Projects() {
    return (
        <div>
            <p className="font-regular text-white text-center text-5xl">Projects</p>
            <p className="font-light text-white text-center text-2xl mt-5 mb-10">Here's my sample projects</p>

            <ItemCards
                image={ProjMobileI}
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
            />

            <ItemCards
                image={ProjMobileII}
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
            />

            <ItemCards
                image={ProjMobileIII}
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
            />
        </div>
    )
}

export default Projects
