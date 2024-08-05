import { STRINGS } from "./Strings"

import ProjMobileI from '../assets/images/hrdotnetmobile.png';
import ProjMobileII from '../assets/images/serbisyofinder.png';
import ProjMobileIII from '../assets/images/librarymobile.png';
import ProjMobileIV from '../assets/images/pwdmobile.png';
import ProjWebI from '../assets/images/bhive.jpg';
import ProjWebII from '../assets/images/udmclinic.jpg';
import ProjWebIII from '../assets/images/snaps.jpg';
import ProjWebIV from '../assets/images/weblibrary.jpg';

import IconTypescript from '../assets/icons/typescript.svg'
import IconExpo from '../assets/icons/expo.svg'
import IconNode from '../assets/icons/node.svg'
import IconReact from '../assets/icons/react.svg'
import IconExpress from '../assets/icons/express.svg'
import IconNgrok from '../assets/icons/ngrok.svg'
import IconNPM from '../assets/icons/npm.svg'
import IconCsharp from '../assets/icons/csharp.svg'
import IconSequalize from '../assets/icons/sequalize.svg'
import IconAndroid from '../assets/icons/android.svg'
import IconAndroidStudio from '../assets/icons/androidstudio.svg'
import IconJava from '../assets/icons/java.svg'
import IconFirebase from '../assets/icons/firebase.svg'
import IconTM from '../assets/icons/tm.svg'
import IconHTML from '../assets/icons/html.svg'
import IconCSS from '../assets/icons/css.svg'
import IconJS from '../assets/icons/javascript.svg'
import IconBootstrap from '../assets/icons/bootstrap.svg'
import IconCodeigniter from '../assets/icons/codeigniter.svg'
import IconTensorflow from '../assets/icons/tensorflow.svg'
import IconMySQL from '../assets/icons/mysql.svg'
import IconPython from '../assets/icons/python.svg'
import IconDjango from '../assets/icons/django.svg'
import IconLaravel from '../assets/icons/laravel.svg'
import IconPostgre from '../assets/icons/postgre.svg'
import IconTailwind from '../assets/icons/tailwind.svg'
import IconNextJS from '../assets/icons/nextjs.svg'
import IconReactWhite from '../assets/icons/reactwhite.svg'
import IconTypescriptWhite from '../assets/icons/typescriptwhite.svg'

import IconGithub from '../assets/icons/github.svg'
import IconGmail from '../assets/icons/gmail.svg'
import IconFB from '../assets/icons/fb.svg'

export const ARRAY = {
    Skills: ['mobile developer.', 'web developer.', 'fullstack developer.', 'UI designer.'],

    Projects: [
        {
            // HRDotNet
            image: ProjMobileI,
            title: STRINGS.prjTitleOne,
            description: STRINGS.prjDescOne,
            width: 400,
            height: 100,
            icons: [
                { src: IconTypescript },
                { src: IconReact },
                { src: IconExpress },
                { src: IconCsharp },
                { src: IconExpo },
                { src: IconNode },
                { src: IconSequalize },
                { src: IconNgrok },
                { src: IconNPM },
            ]
        },
        {
            // Serbisyofinder
            image: ProjMobileII,
            title: STRINGS.prjTitleTwo,
            description: STRINGS.prjDescTwo,
            width: 330,
            height: 100,
            url: 'https://github.com/HNDRIXX/SerbisyoFinder',
            icons: [
                { src: IconAndroid },
                { src: IconAndroidStudio },
                { src: IconJava },
                { src: IconFirebase },
            ]
        },
        {
            // Mobile Library
            image: ProjMobileIII,
            title: STRINGS.prjTitleThree,
            description: STRINGS.prjDescThree,
            width: 250,
            height: 100,
            url: 'https://github.com/HNDRIXX/Library-Android-Application/blob/main/-%20Sample%20Pictures/01.Login.jpg',
            icons: [
                { src: IconAndroid },
                { src: IconAndroidStudio },
                { src: IconJava },
                { src: IconFirebase },
                { src: IconTensorflow },
                { src: IconTM },
            ]
        },
        {
            // PWD Accessibility Mobile App
            image: ProjMobileIV,
            title: STRINGS.prjTitleFour,
            description: STRINGS.prjDescFour,
            width: 330,
            height: 100,
            icons: [
                { src: IconAndroid },
                { src: IconAndroidStudio },
                { src: IconJava },
                { src: IconFirebase },
            ]
        },
        {
            // Bhive
            image: ProjWebI,
            title: STRINGS.projTitleWebI,
            description: STRINGS.projDescWebI,
            height: 100,
            width: 600,
            gap: true,
            url: 'https://github.com/HNDRIXX/OJT-Project-DENR-EMB-MIMAROPA/blob/master/-%20Sample%20Pictures/01.Home.jpg',
            icons: [
                { src: IconHTML },
                { src: IconCSS },
                { src: IconBootstrap },
                { src: IconJS },
                { src: IconCodeigniter },
                { src: IconMySQL },
            ]
        },
        {
            // UDM CLinic
            image: ProjWebII,
            title: STRINGS.projTitleWebII,
            description: STRINGS.projDescWebII,
            height: 100,
            width: 600,
            leftSpace: '10',
            url: 'https://github.com/HNDRIXX/UDM-Clinic/blob/master/-%20Sample%20Pictures/01.Register.jpg',
            icons: [
                { src: IconPython },
                { src: IconDjango },
                { src: IconBootstrap },
            ]
        },
        {
            // Snaps
            image: ProjWebIII,
            title: STRINGS.projTitleWebIII,
            description: STRINGS.projDescWebIII,
            height: 100,
            width: 600,
            url: 'https://github.com/HNDRIXX/Snaps/blob/main/-%20Sample%20Pictures/01.%20Login.jpg',
            icons: [
                { src: IconLaravel },
                { src: IconBootstrap },
                { src: IconPostgre },
            ]
        },
        {
            // Web Library Management System 
            image: ProjWebIV,
            title: STRINGS.projTitleWebIV,
            description: STRINGS.projDescWebIV,
            height: 100,
            width: 595,
            url: 'https://github.com/HNDRIXX/Library-Web/blob/main/-%20Sample%20Pictures/1.Login.jpg',
            icons: [
                { src: IconHTML },
                { src: IconCSS },
                { src: IconBootstrap },
                { src: IconJS },
                { src: IconFirebase },
            ]
        },
    ],

    Stack: [
        { src: IconTypescriptWhite },
        { src: IconReactWhite },
        { src: IconNextJS },
        { src: IconTailwind }
    ],

    Socials: [
        { src: IconGithub, url: 'https://github.com/HNDRIXX'},
        { src: IconGmail, url: 'https://mail.google.com/mail/?view=cm&to=patricklofranco49@gmail.com' },
        { src: IconFB, url: 'https://www.facebook.com/patrick.lofranco' }
    ]
}