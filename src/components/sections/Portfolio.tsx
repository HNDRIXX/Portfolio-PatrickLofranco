"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/Card";

import HRDotNetMobile from '../../assets/images/hrdotnetmobile.png';

export function Portfolio() {
    return (
        <CardContainer className="inter-var">
            <CardBody 
                className="bg-zinc-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                >
                    HRDotNet Mobile
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2 dark:text-white"
                >
                    HRDotNet Mobile is a cross-platform HRIS mobile application that I developed for Intellismart Technology. Improving HR operations for more efficiency, employee engagement, and experience.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={HRDotNetMobile}
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
