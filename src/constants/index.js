import {
    html,
    css,
    javascript,
    reactjs,
    tailwind,
    git,
    github,
    vite,
    wordpress,
    bootstrap,
    firebase,
    web,
    zapier
} from '../assets/tech'

import {
    martial_geeks,
    exchange,
    sagaIdiomas, 
    pastorino
} from '../assets/projects'

import {
    web_dev,
    maintenance,
    optimization,
    SEO,
    update,
} from '../assets/services'

const heroDescription = [
    {
        heading: "Dejando mi marca en la Internet, un proyecto a la vez.",
        subHeading1: "Soy Beyker Estrada.",
        subHeading2: "Desarrollador Web Frontend",
        buttonText: "Ver proyectos",
    }
]

const navLinks = [
    {
        id: "about",
        title: "AcercaDe",
    },
    {
        id: "portfolio",
        title: "Proyectos",
    },
    {
        id: "contact",
        title: "Contacto",
    }
]

const services = [
    {
        title: "Desarrollo Web",
        icon: web_dev,
    },
    {
        title: "Mantenimiento",
        icon: maintenance,
    },
    {
        title: "Optimización",
        icon: optimization,
    },
    {
        title: "Actualizaciones",
        icon: update,
    },
    {
        title: "SEO Básico",
        icon: SEO,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Tailwind",
        icon: tailwind,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    
    {
        
        name: "Vite",
        icon: vite,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Github",
        icon: github,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Wordpress",
        icon: wordpress,
    },
    {
        name: "Zapier",
        icon: zapier,
    },
]

const projects = [
    {
        name: "Estudio Jurídico Pastorino",
        description:
            "Sitio web informativo para estudio jurídico con base en Buenos Aires, Agentina.",
        tags: [
            {
                name: "React",
                color: "text-blue-light",
            },
            {
                name: "Tailwind CSS",
                color: "text-orange-darker",
            },
            {
                name: "JavaScript",
                color: "text-blue-light",
            },
            {
                name: "Vite",
                color: "text-yellow-dark",
            },
        ],
        image: pastorino,
        deploy_link: "https://pastorino.netlify.app/"
    },
    {
        name: "SagaIdiomas",
        description:
            "Sitio Web estático informativo para una escuela de aprendizaje de idiomas online.",
        tags: [
            {
                name: "HTML",
                color: "text-orange-dark",
            },
            {
                name: "SCSS",
                color: "text-blue-light",
            },
            {
                name: "Bootstrap",
                color: "text-blue-light",
            },
        ],
        image: sagaIdiomas,
        deploy_link: "https://beykerestrada.github.io/sagaidiomas-coderhouse/",
        source_code_link: "https://github.com/beykerestrada/sagaidiomas-coderhouse",
    },
    {
        name: "Exchange Crypto",
        description:
            "Simulador de un exchange de criptomonedas donde el usuario puede realizar distintas acciones como abonar, comprar, vender, retirar y ver su historial de transacciones y las variaciones de precio de las diferentes criptomonedas.",
        tags: [
            {
                name: "HTML",
                color: "text-orange-darker",
            },
            {
                name: "CSS",
                color: "text-blue-light",
            },
            {
                name: "JavaScript",
                color: "text-yellow-dark",
            },
        ],
        image: exchange,
        source_code_link: "https://github.com/beykerestrada/Simulador-ExchangeCripto",
        deploy_link: "https://beykerestrada.github.io/Simulador-ExchangeCripto/"
    },
    {
        name: "Martial Geeks",
        description:
            "Sitio Web E-commerce para tienda de artículos de artes marciales. Con registro de usuario, carrito persistente y se simula el flujo de compra del usuario",
        tags: [
            {
                name: "React",
                color: "text-blue-light",
            },
            {
                name: "SCSS",
                color: "text-orange-darker",
            },
            {
                name: "JavaScript",
                color: "text-blue-light",
            },
            {
                name: "Firebase",
                color: "text-yellow-dark",
            },
        ],
        image: martial_geeks,
        source_code_link: "https://github.com/beykerestrada/martial-geeks",
        deploy_link: "https://martialgeeks.netlify.app/"
    },

];


export {
    heroDescription,
    navLinks,
    technologies,
    projects,
    services
}