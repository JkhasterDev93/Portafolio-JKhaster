import type { ExpDetail, gridBoxExp, icon_button, listStack, listViewer, textGeneral } from "../Interfaces/Interface";
import Curriculum from '../../assets/icons/document.svg?react';
import GitHub from '../../assets/icons/github.svg?react';
import Linkedin from '../../assets/icons/linkedin.svg?react';
import Pinterest from '../../assets/icons/pinterest.svg?react';
import X from '../../assets/icons/twitter-alt-circle.svg?react';
import WhatsApp from '../../assets/icons/whatsapp.svg?react';
import Like from '../../assets/icons/like.svg?react';
import Comentar from '../../assets/icons/comment.svg?react';
import Compartir from '../../assets/icons/share.svg?react';

export const IconsButtons:icon_button[]  = [
    {name: 'Linkedin', tooltip: 'Ir a Linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/jaimemgarcia093/'},
    {name: 'GitHub', tooltip: 'Ir a GitHub', icon: GitHub, url: 'https://github.com/JkhasterDev93'},
    {name: 'Pinterest', tooltip: 'Ir a Pinterest', icon: Pinterest, url: 'https://mx.pinterest.com/jaimekhaster/'},
    {name: 'WhatsApp', tooltip: 'Enviar WhatsApp', icon: WhatsApp, url: 'https://wa.me/5214421038430?text=Hola%20Jaime!,%20Vi%20tu%20portafolio%20y%20quisiera%20agendar%20una%20reunión%20:)%20%20¿Qué%20te%20parece?'},
    {name: 'X', tooltip: 'Ir a X (antes Twitter)', icon: X, url: 'https://x.com/jaimekhaster?s=11'},
    {name: 'Curriculum', tooltip: 'Descargar CV', icon: Curriculum, url: ''}
]

export const IconsIntagram:icon_button[]  = [
    {name: 'Like', tooltip: 'Ir a Linkedin', icon: Like, url: ''},
    {name: 'Comentar', tooltip: 'Ir a GitHub', icon: Comentar, url: ''},
    {name: 'Compartir', tooltip: 'Ir a Pinterest', icon: Compartir, url: ''},
]

export const AboutMeText:textGeneral[] = [
    {
        name: 'text01', 
        text: `Tengo experiencia como Tester en el área de Aseguramiento de Calidad (QA) 
        y recientemente he enfocado mi desarrollo profesional en el Front End. Por lo que, 
        me mantengo en constante aprendizaje mediante cursos, capacitaciones y proyectos 
        personales que me permiten fortalecer mis habilidades técnicas y contribuir a la 
        creación de softwares de gran calidad.`
    },
    {
        name: 'text02', 
        text: `Mi objetivo es seguir creciendo como desarrollador Front End y, a largo plazo, 
        ampliar mi formación hacia el desarrollo Full Stack para participar en todas las etapas 
        de una aplicación. Además del desarrollo, también disfruto el diseño de interfaces de 
        usuario y, recientemente, he colaborado en proyectos de diseño gráfico para la promoción 
        de eventos, experiencias que han fortalecido mis habilidades en manejo de visuales.`
    }
]

export const ListSoftSkills:textGeneral[] = [
    {name: 'skill01', text: 'Aprendizaje Continuo'},
    {name: 'skill02', text: 'Trabajo en Equipo'},
    {name: 'skill03', text: 'Resolución de Problemas'},
    {name: 'skill04', text: 'Adaptación al cambio'}
]

export const ListLanguage:textGeneral[] = [
    {name: 'language01', text: 'Español (Nativo)'},
    {name: 'language02', text: 'Inglés (Pre-Intermedio)'},
]

export const ListEducation:listViewer = {
    main: {time: '2020 - 2024', course: 'Ingeniería en Software', school: 'Universidad Autónoma de Querétaro | Facultad de Informática'},
    others: [
        {school: 'Udemy', description: 'Next.js: El framework de React para producción', time: 'En proceso', end: 'N', porcent: '15%', url: ''},
        {school: 'Udemy', description: 'Máster Completo Java de cero a experto Actualizado', time: 'En proceso', end: 'N', porcent: '20%', url: ''},
        {school: 'Udemy', description: 'React: De cero a experto', time: 'En proceso', end: 'N', porcent: '50%', url: ''},
        {school: 'Udemy', description: 'Git + GitHub: Todo un sistema de control de versiones', time: '2026', end: 'S', porcent: '100%', url: 'https://drive.google.com/file/d/1GlK4MPH_609tyxy9YwF30hcsFmRF7SYE/view?usp=sharing'},
        {school: 'Udemy', description: 'TypeScript: Tu completa guía y manual de mano', time: '2025', end: 'S', porcent: '100%', url: 'https://drive.google.com/file/d/1T4dU-X2nvkl2HWb6M3CUvvJdt5X3M0Ys/view?usp=sharing'},
        {school: 'Udemy', description: 'Relational DataBase Desing', time: '2025', end: 'S', porcent: '100%', url: 'https://drive.google.com/file/d/13YEtZcKSCg_hfAx_O6JRicB_BfGT4PYV/view?usp=sharing'},
        {school: 'Udemy', description: 'Software Testing desde 0: MasterClass todo en 1 con IA', time: '2025', end: 'S', porcent: '100%', url: 'https://drive.google.com/file/d/1pL-2JYN2EXyWJNY8wEXDv9DCEB_ScSQ6/view?usp=drive_link'},
    ]
}

export const ListStacks:listStack[] = [
    {name: 'react', label: 'React', icon: '/public/ShortImages/react.png'},
    {name: 'type', label: 'TypeScript', icon: '/public/ShortImages/typescript.png'},
    {name: 'git', label: 'Git', icon: '/public/ShortImages/gitlab.png'},
    {name: 'github', label: 'GitHub', icon: '/public/ShortImages/github.png'},
    {name: 'html', label: 'HTML', icon: '/public/ShortImages/html.png'},
    {name: 'css', label: 'CSS', icon: '/public/ShortImages/css-3.png'},
    {name: 'tail', label: 'Tailwind', icon: '/public/ShortImages/tailwind.png'},
    {name: 'java', label: 'Java', icon: '/public/ShortImages/java.png'},
    {name: 'python', label: 'Python', icon: '/public/ShortImages/python.png'},
    {name: 'selenium', label: 'Selenium', icon: '/public/ShortImages/selenium.png'},
    {name: 'postman', label: 'Postman', icon: '/public/ShortImages/postman.png'},
    {name: 'sql', label: 'MySql', icon: '/public/ShortImages/sql.png'},
    {name: 'figma', label: 'Figma', icon: '/public/ShortImages/figma.png'},
    {name: 'photo', label: 'Photoshop', icon: '/public/ShortImages/photoshop.png'},
    {name: 'notion', label: 'Notion', icon: '/public/ShortImages/notion.png'},
    {name: 'next', label: 'Next.js', icon: '/public/ShortImages/next.png'},
]

export const gridBoxExperience: gridBoxExp[] = [
    {id: 1, showImage: 'S', src:'public/boxphoto01.jpg', class: 'col-span-8 row-span-5 justify-between shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Desarrollador Front End Jr.', company: 'CodexTec 2026'},
    {id: 2, showImage: 'S', src:'public/boxphoto02.jpg', class: 'col-span-4 row-span-6 col-start-9 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'QA Tester', company: 'Códice Global 2024'},
    {id: 3, showImage: 'S', src:'public/boxphoto03.jpg', class: 'col-span-3 row-span-5 row-start-6 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Tester Funcional', company: 'MTI Consultoría 2024'},
    {id: 4, showImage: 'N', src:'', class: 'col-span-5 row-span-2 col-start-4 row-start-6 justify-end bg-[#578014]',bg: 'Diseñador de Flayers', company: 'Freelance 2026'},
    {id: 5, showImage: 'N', src:'', class: 'col-span-5 row-span-3 col-start-4 row-start-8 justify-end bg-[#578014]',bg: 'Programador Front End', company: 'Universidad Autónoma de Querétaro'},
    {id: 6, showImage: 'S', src:'public/boxphoto04.png', class: 'col-span-4 row-span-4 col-start-9 row-start-7 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Artista Visual en Videojuego', company: 'Universidad Autónoma de Querétaro'},
]


export const expDetalleModal:ExpDetail[] = [
    {
        id: 1, 
        title: 'Freelancer Diseñador de Flayers',
        pagraph: [
            {
                subtitle: null,
                text: `Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever 
                since 1966, when designers at Letraset and James 
                Mosley, the librarian at St Bride Printing Library 
                in London, took a 1914 Cicero translation and 
                scrambled it to make dummy text for Letraset's Body 
                Type sheets.`
            },
            {
                subtitle: 'Proceso Creativo',
                text: `It is a long established fact that a reader 
                will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem 
                Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.`,
            }
        ],
        render: [
            {
                id:'img01',
                src: '/public/ImagesExp/Codex/image01.jpg'
            },
            {
                id:'img02',
                src: '/public/ImagesExp/Codex/image02.jpg'
            },
            {
                id:'img03',
                src: '/public/ImagesExp/Codex/image03.jpeg'
            },
            {
                id:'img04',
                src: '/public/ImagesExp/Codex/image04.jpg'
            },
        ]
    },
    {
        id: 2, 
        title: 'Freelancer Diseñador de Flayers',
        pagraph: [
            {
                subtitle: null,
                text: `Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever 
                since 1966, when designers at Letraset and James 
                Mosley, the librarian at St Bride Printing Library 
                in London, took a 1914 Cicero translation and 
                scrambled it to make dummy text for Letraset's Body 
                Type sheets.`
            },
            {
                subtitle: 'Proceso Creativo',
                text: `It is a long established fact that a reader 
                will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem 
                Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.`,
            }
        ],
        render: [
            {
                id:'img01',
                src: '/public/ImagesExp/Codice/image01.jpg'
            },
            {
                id:'img02',
                src: '/public/ImagesExp/Codice/image02.jpg'
            },
            {
                id:'img03',
                src: '/public/ImagesExp/Codice/image03.jpeg'
            },
            {
                id:'img04',
                src: '/public/ImagesExp/Codice/image04.jpg'
            },
        ]
    },
    {
        id: 3, 
        title: 'Freelancer Diseñador de Flayers',
        pagraph: [
            {
                subtitle: null,
                text: `Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever 
                since 1966, when designers at Letraset and James 
                Mosley, the librarian at St Bride Printing Library 
                in London, took a 1914 Cicero translation and 
                scrambled it to make dummy text for Letraset's Body 
                Type sheets.`
            },
            {
                subtitle: 'Proceso Creativo',
                text: `It is a long established fact that a reader 
                will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem 
                Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.`,
            }
        ],
        render: [
            {
                id:'img01',
                src: '/public/ImagesExp/MTI/image01.jpg'
            },
            {
                id:'img02',
                src: '/public/ImagesExp/MTI/image02.jpg'
            },
            {
                id:'img03',
                src: '/public/ImagesExp/MTI/image03.jpeg'
            },
            {
                id:'img04',
                src: '/public/ImagesExp/MTI/image04.jpg'
            },
        ]
    },
    {
        id: 4, 
        title: 'Freelancer Diseñador de Flayers',
        pagraph: [
            {
                subtitle: null,
                text: `Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever 
                since 1966, when designers at Letraset and James 
                Mosley, the librarian at St Bride Printing Library 
                in London, took a 1914 Cicero translation and 
                scrambled it to make dummy text for Letraset's Body 
                Type sheets.`
            },
            {
                subtitle: 'Proceso Creativo',
                text: `It is a long established fact that a reader 
                will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem 
                Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.`,
            }
        ],
        render: [
            {
                id:'img01',
                src: '/public/ImagesExp/Flayers/image01.png'
            },
            {
                id:'img02',
                src: '/public/ImagesExp/Flayers/image02.png'
            },
            {
                id:'img03',
                src: '/public/ImagesExp/Flayers/image03.png'
            },
            {
                id:'img04',
                src: '/public/ImagesExp/Flayers/image04.png'
            },
        ]
    },
    {
        id: 5, 
        title: 'Freelancer Diseñador de Flayers',
        pagraph: [
            {
                subtitle: null,
                text: `Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever 
                since 1966, when designers at Letraset and James 
                Mosley, the librarian at St Bride Printing Library 
                in London, took a 1914 Cicero translation and 
                scrambled it to make dummy text for Letraset's Body 
                Type sheets.`
            },
            {
                subtitle: 'Proceso Creativo',
                text: `It is a long established fact that a reader 
                will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem 
                Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.`,
            }
        ],
        render: [
            {
                id:'img01',
                src: '/public/ImagesExp/Codbridge/image01.png'
            },
            {
                id:'img02',
                src: '/public/ImagesExp/Codbridge/image02.png'
            },
            {
                id:'img03',
                src: '/public/ImagesExp/Codbridge/image03.png'
            },
            {
                id:'img04',
                src: '/public/ImagesExp/Codbridge/image04.png'
            },
        ]
    },
    {
        id: 6, 
        title: 'Freelancer Diseñador de Flayers',
        pagraph: [
            {
                subtitle: null,
                text: `Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever 
                since 1966, when designers at Letraset and James 
                Mosley, the librarian at St Bride Printing Library 
                in London, took a 1914 Cicero translation and 
                scrambled it to make dummy text for Letraset's Body 
                Type sheets.`
            },
            {
                subtitle: 'Proceso Creativo',
                text: `It is a long established fact that a reader 
                will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem 
                Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.`,
            }
        ],
        render: [
            {
                id:'img01',
                src: '/public/ImagesExp/VideoGame/image01.png'
            },
            {
                id:'img02',
                src: '/public/ImagesExp/VideoGame/image02.png'
            },
            {
                id:'img03',
                src: '/public/ImagesExp/VideoGame/image03.png'
            },
            {
                id:'img04',
                src: '/public/ImagesExp/VideoGame/image04.png'
            },
        ]
    },
]