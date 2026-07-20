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
    {id: 1, showImage: 'S', src: box01, class: 'md:col-span-8 md:row-span-5 justify-between shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Desarrollador Front End Jr.', company: 'CodexTec - 2026'},
    {id: 2, showImage: 'S', src: box02, class: 'md:col-span-4 md:row-span-6 md:col-start-9 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'QA Tester', company: 'Códice Global - 2024'},
    {id: 3, showImage: 'S', src: box03, class: 'md:col-span-3 md:row-span-5 md:row-start-6 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Tester Funcional', company: 'MTI Consultoría - 2024'},
    {id: 4, showImage: 'N', src:'', class: 'md:col-span-5 md:row-span-2 md:col-start-4 md:row-start-6 justify-end bg-[#578014]',bg: 'Campaña de Marketing para Torneo', company: 'Redes Sociales - Freelance - 2026'},
    {id: 5, showImage: 'N', src:'', class: 'md:col-span-5 md:row-span-3 md:col-start-4 md:row-start-8 justify-end bg-[#578014]',bg: 'Cobridge Transductor (java to c++)', company: 'Universidad Autónoma de Querétaro - Programador Front End - 2023'},
    {id: 6, showImage: 'S', src: box04, class: 'md:col-span-4 md:row-span-4 md:col-start-9 md:row-start-7 justify-end shadow-[inset_0px_-50px_59px_-3px_rgba(29,29,27,0.8)]',bg: 'Titulación x Brinco', company: 'Universidad Autónoma de Querétaro - Concept Artist - 2023'},
]


export const expDetalleModal:ExpDetail[] = [
    {
        id: 1, 
        title: 'Programador Front End Jr. CodexTec',
        stack:['React', 'TypeScript', 'Postman', 'Tailwind', 'Git', 'Next', 'Scrum'],
        pagraph: [
            {
                text: `Actualmente estoy colaborando en el proyecto
                del Nuevo Recaudanet de Gobierno del Estado de Querétaro. En el área de
                desarrollo, realizo diversas actividades y una de las principales 
                siendo la implementación de funciones, que permitan al usuario final
                o cliente utilizarlas. Siempre con visión de ser productos
                de calidad y siguiendo normas de experiencia de usuario.`
            },
            {
                subtitle: 'Actividades :',
                list:['Desarrollo de nuevas funcionalidades', 'Corrección de Bugs', 'Consumo de APIs', 'Construcción de Interfaces', 'Construcción de componentes'],
            },
            {
                text: `Mi integración al equipo de desarrollo Front End
                ha traido consigo logros que han aportado a mejorar cada día
                la implementación o mantenimiento de interfaces:`
            },
            {
                list:['Optimización en consumo de servicios', 'Implementación de componentes genéricos', 'Participación en revisiones de código', 'Participación activa con la cédula del equipo'],
            },
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
        title: 'Q.A. Tester Códice Global',
        stack:['Postman', 'Selenium', 'Python', 'Excel', 'Word', 'Notion'],
        pagraph: [
            {
                text: `Participe en el proyecto Nuevo Recaudanet de Gobierno del 
                Estado de Querétaro. En el área del Aseguramiento de la Calidad y una 
                de las principales actividades fue la implementación de pruebas unitarias 
                e integrales, realizando la revisión de una especificación técnica y requisitos.`
            },
            {
                subtitle: 'Actividades :',
                list:['Pruebas Unitarias', 'Pruebas Integrales', 'Pruebas Automatizadas', 'Pruebas de Vida', 'Documentación de Incidencias', 'Análisis en Reportes de Requerimientos', 'Pruebas de Rendimiento'],
            },
            {
                text: `Mi integración al equipo de Q.A. ha traido consigo la
                implementación de herramientas y ciertos logros para el equipo:`
            },
            {
                list:['Implementación de pruebas automatizadas con Selenium', 'Implementación de formato para seguimiento de incidencias', 'Seguimiento de cambios en Fichas Técnicas', 'Participación en la revisión de nuevas funcionalidades'],
            },
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
        title: 'Tester Funcional MTI Consultoría',
        stack:['Word', 'Excel', 'PLSql', 'Git', 'Notion'],
        pagraph: [
            {
                text: `Participe con el equipo de consultoria de MTI, para realizar
                revisiones, sobre el producto REGER GRP para uno de sus clientes con
                el fin de garantizar que el módulo para un sistema de ingresos, se adapte
                a las necesidades del cliente entregando un producto de calidad.`
            },
            {
                subtitle: 'Actividades :',
                list:['Pruebas Unitarias', 'Pruebas Integrales', 'Pruebas de Vida', 'Documentación de Incidencias'],
            },
            {
                text: `Mi integración al equipo de Q.A. ha traido consigo la
                implementación de herramientas y ciertos logros para el equipo:`
            },
            {
                list:['Implementación de formato para seguimiento de incidencias', 'Participación en la revisión de nuevas funcionalidades'],
            },
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
        title: 'Campaña de Marketing Torneo de Valorant',
        stack:['Photoshop', 'Pinterest', 'Google Drive', 'Discord', 'Instagram'],
        pagraph: [
            {
                text: `Participe en la planeación y diseño de la identidad visual
                para una campaña de marketing enfocada a un torneo del vídeojuego
                de Valorant. Durante un periódo de tiempo me enfoque en diseñar 
                materiales promocionales para redes sociales manteniendo la temática
                del evento y buscando captar la atención de la comunidad. Además, se
                realizaron las siguientes responsabilidades:`
            },
            {
                list:['Diseño de identidad visual', 'Creación de publicaciones para redes sociales', 'Adaptación de materiales en diferentes formatos', 'Constantes reuniones para feedback y cambios', 'Programación de publicaciones en base a la afluencia de usuarios'],
            },
            {
                text: `Los resultados conseguidos de la campaña de marketing:`
            },
            {
                list:['Incremento de usuarios del servidor de torneos', 'Mayor interacción en redes sociales', 'Material reutilizable antes, durante y terminado el evento', 'Incremento de seguidores en las redes sociales de la comunidad'],
            },
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
        title: 'Programador Front End Cobridge Transductor',
        stack:['Figma', 'Photoshop', 'Python', 'Tkinter', 'Pixelorama'],
        pagraph: [
            {
                title: 'Cobridge Transductor',
                text: `Es un transductor el cual, su principal objetivo es interpretar
                el código escrito con sintaxis de Java, utilizando DataSet y así
                transcribirlo a sintaxis de C++ y así de forma inversa. 
                Esto con la necesidad de tener una herramienta que pudiera 
                facilitar el trabajo de interpretar código de una sintaxis a otra.
                Además, con la creciente incertidumbre de utilizar IA y está
                pueda vulnerar el sistema al utilizar el código fuente.`
            },
            {
                subtitle:'Mi participación en Cobridge',
                text: `Participé en la planeación, diseño e implementación de la 
                identidad visual del programa Cobridge Transductor, con el objetivo 
                de crear una interfaz intuitiva, funcional y visualmente atractiva 
                que facilitara el uso de sus diferentes funcionalidades. Asimismo, 
                desarrollé la identidad gráfica para el evento universitario 
                "Proyecta-T", diseñando materiales visuales que reforzaran la imagen 
                y comunicación del evento. Los estilos y herramientas utilizados trataban de 
                conseguir los siguientes objetivos:`,
            },
            {
                
                list:['Conseguir una identidad visual única', 'Entregar una buena experiencia de usuario', 'Mostrar las habilidades de diseño visual implementadas', 'Destacar sobre los demás proyectos del evento'],
            },
            {
                text: `Los resultados conseguidos:`
            },
            {
                list:['Obtener el primer lugar en la premeación del evento', 'Conseguir el interés de los alumnos y directivos sobre el producto', 'La posibilidad de utilizar el proyecto como método de titulación'],
            },
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
        title: 'Concept Artist en vídeojuego 2D Titulación x Brinco',
        stack:['Pixelorama', 'Photoshop', 'Unity 2D', 'C#', 'Filmora', 'Git'],
        pagraph: [
            {
                title: 'Titulación x Brinco',
                text: `Es videojuego el cual trata de mostrar de forma satírica
                la odisea de un estudiante de universidad, al tratar de pasar por el proceso
                de titulación. Miguelón quién es el protagonista de esta aventura
                se enfrenta a la difícil noticia de saber que su proceso de titulación
                está por peligrar, entonces decidido, se enfrenta a diferentes obstáculos
                y deberá saltar por diferentes plataformas y así poder conseguir su título. 
                Pero, lo que no sabe es que un paso en falso, puede costarle el empezar de nuevo.`
            },
            {
                subtitle:'Mi participación en Titulación x Brinco',
                text: `Participé en la planeación y diseño del videojuego con estilo PixelArt,
                desarrollando recursos gráficos como Sprites, escenarios, elementos de la interfaz 
                y la elección de las paletas de colores. Además, de apegarme a la temática y concepción 
                que debía cumplir el videojuego para participar en el evento universitario "Proyecta-T".
                Se búsco del hacer una experiencia atractiva y divertida para los alumnos de la facultad,
                con esto se consiguio:`,
            },
            {
                
                list:['Interés por los alumnos a tal punto de querer conocer todo el proceso', 'Entregar una buena experiencia de usuario', 'Conseguir una buena aceptación por el jurado', 'Destacar sobre los demás proyectos del evento', 'Conseguir un reconocimiento al ser el primer videojuego en presentar una buena propuesta'],
            },
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