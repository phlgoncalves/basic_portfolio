import { DiHtml5, DiCss3, DiJsBadge, DiSass, DiMysql, DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import '../styles/components/technologiescontainer.scss'

const technologies = [
    {
        id: 'html',
        name: "HTML5",
        icon: <DiHtml5 />,
        information: "Amplo conhecimento: Utilização de elementos semânticas, WAI-ARIA e atributos de acessibilidade "
    },
    {
        id: 'css',
        name: "CSS3", icon:
            <DiCss3 />,
        information: "Amplo conhecimento: Herança, Especificidade, variáveis, media query, flex box e grid"
    },
    {
        id: 'js',
        name: "JavaScript",
        icon: <DiJsBadge />,
        information: "Amplo conhecimento: Estruturas condicionais e de repetição, Arrays e Objetos, DOM, ES Modules, POO e Promises"
    },
    {
        id: 'sass',
        name: "Sass",
        icon: <DiSass />,
        information: "Amplo conhecimento: Variáveis, Nesting, Mixin, Minify, Herança e Extends"
    },
    {
        id: 'mysql',
        name: "MySQL",
        icon: <DiMysql />,
        information: "Amplo conhecimento: Nesse quesito tenho experiência pois trabalho no dia a dia com a linguagem, fazendo correções pelo SQL nos bancos dos clientes. "
    },
    {
        id: 'react',
        name: "React",
        icon: <DiReact />,
        information: "Conhecimento médio: Componentização, Props (children), Hooks: useState, useContext, useEffect e react-router-dom."
    },
    {
        id: 'ts',
        name: "TypeScript",
        icon: <SiTypescript />,
        information: "Inferência de tipos, criação de interfaces, módulos e POO no TS. Alguns projetos já criados em TS também"
    },
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnlogias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.information}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer