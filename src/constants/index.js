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
    kamikaze,
    comentalibros,
    devlopia,
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
        name: "DevLopia",
        description: "(In progress) DevLopia is a company specializing in helping growing startups scale their operations efficiently.",
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
        image: devlopia,
        deploy_link: "https://devlopia.com/"
    },
    {
        name: "Gasti.pro Home page",
        description:
            "Gasti is an innovative tool that leverages WhatsApp to simplify the process of managing your personal finances. ",
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
        name: "ComentaLibros",
        description: "(In progress) Social media for sharing book reviews and reading lists.",
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
        image: comentalibros,
        deploy_link: "https://comentalibros.com/"
    },
    {
        name: "Kamikaze Soluciones",
        description: "Kamikaze is a company specializing in electronics and 3D modeling.",
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
        image: kamikaze,
        deploy_link: "https://kamikazesoluciones.netlify.app/"
    },

];


export {
    heroDescription,
    navLinks,
    technologies,
    projects,
    services
}