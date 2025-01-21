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
    pastorino,
    gasti
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
        heading: "Crafting Digital Masterpieces, One Project at a Time",
        subHeading1: "I'm Beyker Estrada",
        subHeading2: "a Frontend Web Developer...",
        buttonText: "Check out my projects",
    }
]

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "portfolio",
        title: "Proyects",
    },
    {
        id: "contact",
        title: "Contact",
    }
]

const services = [
    {
        title: "Web Development",
        icon: web_dev,
    },
    {
        title: "Maintenance",
        icon: maintenance,
    },
    {
        title: "Optimization",
        icon: optimization,
    },
    {
        title: "Updates",
        icon: update,
    },
    {
        title: "Basic SEO",
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
        name: "Gasti.pro Landing page",
        description:
            "Gasti is an innovative tool for managing your personal finances. ",
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
                name: "TypeScript",
                color: "text-blue-light",
            },
            {
                name: "Vite",
                color: "text-yellow-dark",
            },
        ],
        image: gasti,
        deploy_link: "https://gasti.pro"
    },
    {
        name: "Pastorino Law Firm",
        description:
            "Informational website for a law firm based in Buenos Aires, Argentina.",
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
            "Static informational website for an online language learning school.",
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
        name: "Crypto Exchange",
        description:
            "Cryptocurrency exchange simulator where users can perform various actions such as depositing, buying, selling, withdrawing, and viewing their transaction history and the price variations of different cryptocurrencies.",
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
            "E-commerce website for a martial arts gear store. Features include user registration, a persistent shopping cart, and a simulated user purchase flow.",
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