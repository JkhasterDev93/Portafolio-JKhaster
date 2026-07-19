import type { ExpDetail, gridBoxExp, icon_button, listStack, listViewer, textGeneral } from "../Interfaces/Interface";
import {cssIcon, figmaIcon, githubIcon, gitIcon, htmlIcon, javaIcon, nextIcon, notioIcon, photoIcon, postmanIcon, pythonIcon, reactIcon, seleniumIcon, sqlIcon, tailIcon, typeIcon} from '../../assets/ShortImages/index';
import { Comentar, Compartir, Curriculum, GitHub, Like, Linkedin, Pinterest, WhatsApp, X } from "../../assets/icons";
import { cobridge01, cobridge02, cobridge03, cobridge04, codex01, codex02, codex03, codex04, codice01, codice02, codice03, codice04, flayer01, flayer02, flayer03, flayer04, mti01, mti02, mti03, mti04, titu01, titu02, titu03, titu04 } from "../../assets/ImagesExp";
import { box01, box02, box03, box04 } from "../../assets/Banners";


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
    {name: 'react', label: 'React', icon: reactIcon},
    {name: 'type', label: 'TypeScript', icon: typeIcon},
    {name: 'git', label: 'Git', icon: gitIcon},
    {name: 'github', label: 'GitHub', icon: githubIcon},
    {name: 'html', label: 'HTML', icon: htmlIcon},
    {name: 'css', label: 'CSS', icon: cssIcon},
    {name: 'tail', label: 'Tailwind', icon: tailIcon},
    {name: 'java', label: 'Java', icon: javaIcon},
    {name: 'python', label: 'Python', icon: pythonIcon},
    {name: 'selenium', label: 'Selenium', icon: seleniumIcon},
    {name: 'postman', label: 'Postman', icon: postmanIcon},
    {name: 'sql', label: 'MySql', icon: sqlIcon},
    {name: 'figma', label: 'Figma', icon: figmaIcon},
    {name: 'photo', label: 'Photoshop', icon: photoIcon},
    {name: 'notion', label: 'Notion', icon: notioIcon},
    {name: 'next', label: 'Next.js', icon: nextIcon},
]

export const gridBoxExperience: gridBoxExp[] = [
    {id: 1, showImage: 'S', src: box01, class: 'md:col-span-8 md:row-span-5 justify-between shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Desarrollador Front End Jr.', company: 'CodexTec 2026'},
    {id: 2, showImage: 'S', src: box02, class: 'md:col-span-4 md:row-span-6 md:col-start-9 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'QA Tester', company: 'Códice Global 2024'},
    {id: 3, showImage: 'S', src: box03, class: 'md:col-span-3 md:row-span-5 md:row-start-6 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Tester Funcional', company: 'MTI Consultoría 2024'},
    {id: 4, showImage: 'N', src:'', class: 'md:col-span-5 md:row-span-2 md:col-start-4 md:row-start-6 justify-end bg-[#578014]',bg: 'Diseñador de Flayers', company: 'Freelance 2026'},
    {id: 5, showImage: 'N', src:'', class: 'md:col-span-5 md:row-span-3 md:col-start-4 md:row-start-8 justify-end bg-[#578014]',bg: 'Programador Front End', company: 'Universidad Autónoma de Querétaro'},
    {id: 6, showImage: 'S', src: box04, class: 'md:col-span-4 md:row-span-4 md:col-start-9 md:row-start-7 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Artista Visual en Videojuego', company: 'Universidad Autónoma de Querétaro'},
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
                src: codex01
            },
            {
                id:'img02',
                src: codex02
            },
            {
                id:'img03',
                src: codex03
            },
            {
                id:'img04',
                src: codex04
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
                src: codice01
            },
            {
                id:'img02',
                src: codice02
            },
            {
                id:'img03',
                src: codice03
            },
            {
                id:'img04',
                src: codice04
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
                src: mti01
            },
            {
                id:'img02',
                src: mti02
            },
            {
                id:'img03',
                src: mti03
            },
            {
                id:'img04',
                src: mti04
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
                src: flayer01
            },
            {
                id:'img02',
                src: flayer02
            },
            {
                id:'img03',
                src: flayer03
            },
            {
                id:'img04',
                src: flayer04
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
                src: cobridge01
            },
            {
                id:'img02',
                src: cobridge02
            },
            {
                id:'img03',
                src: cobridge03
            },
            {
                id:'img04',
                src: cobridge04
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
                src: titu01
            },
            {
                id:'img02',
                src: titu02
            },
            {
                id:'img03',
                src: titu03
            },
            {
                id:'img04',
                src: titu04
            },
        ]
    },
]