"use client";

// import Image from "next/image";
import React from "react";

import ItemCards from "../items/ItemCards";
import HRDotNetMobile from '../../assets/images/hrdotnetmobile.png';
import { STRINGS } from "../../constants/Strings";

function Projects() {
    return (
        <div>
            <p className="font-light text-white text-center text-5xl">Lorem Ipsum</p>
            
            <ItemCards
                image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
            />

            <ItemCards
                image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
            />

            <ItemCards
                image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
            />

            <ItemCards
                image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={STRINGS.prjTitleOne}
                description={STRINGS.prjDescOne}
            />
        </div>
    )
}

export default Projects
