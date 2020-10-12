import React from "react"
import ProjectCard from "../projectsCards/ProjectsCard"

const Projects = () => {

    const myProjects = [
        {
            projectName: "SlashDebt",
            description: "Web application tool to manage and prioritize personal debts, creating payment schedule and forecast based on interest rates, principal amounts.",
            image: "assets/ScreenShotSlashDebt.png",
            github: "https://github.com/almonasterio/SlashDebt",
            technologies: ["React", "JavaScript", "Axios", "Node Js" ,"Express",  "MongoDB"],
            deploy: "https://slashdebt.herokuapp.com/"
        },

        {
            projectName: "RUNeando",
            description: "Full-stack web app to help runners share and save their favorite routes.",
            image: "assets/ScreenShotRUNeando.png",
            github: "https://github.com/runeando/RUNeando",
            technologies: ["Node Js", "MongoDB", "Express", "Javascript","HandleBars", "Bootstrap", "GoogleAPI"],
            deploy: "https://runeando.herokuapp.com/"
        },

        {
            projectName: "ZeldAlvaro",
            description: "Web based Zelda mini game built using node and HTML Canvas using OOP principles.",
            image: "assets/ScreenShotZeldAlvaro.png",
            github: "https://github.com/almonasterio/ZeldAlvaro",
            technologies: ["Javascript", "HTML5","CSS3","OOP", "Canvas"],
            deploy: "https://almonasterio.github.io/ZeldAlvaro/"
        },

    ]

    return (
     <section className=" bg-gray-100 pt-10 border-t border-orange-920 ">

        <h4 className="text-center text-lg sm:text-2xl lg:text-2xl bg-gray-920 text-orange-920 font-syncopate font-medium p-6 mb-10 text-3xl ">Check out some of my projects</h4>
        <div className=" mx-auto">
            <div className="flex flex-wrap lg:mx-20">
    
                {myProjects.map(item => (
                    <ProjectCard
                        projectName={item.projectName}
                        description={item.description}
                        image={item.image}
                        github={item.github}
                        deploy={item.deploy}
                        technologies = {item.technologies}
                    />
                ))}
    
            </div>
        </div>
    
    </section>
        
    )

}

export default Projects