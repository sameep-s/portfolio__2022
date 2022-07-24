import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Projects = () => {

    const projects = [
        {
            id: 1,
            linkGithub: "https://github.com/sameep-s?tab=repositories",
            linkHosted: "",
            src: arrayDestruct

        },

        {
            id: 2,
            linkGithub: "https://github.com/sameep-s?tab=repositories",
            linkHosted: "",
            src: installNode

        },

        {
            id: 3,
            linkGithub: "https://github.com/sameep-s?tab=repositories",
            linkHosted: "",
            src: navbar

        },

        {
            id: 4,
            linkGithub: "https://github.com/sameep-s?tab=repositories",
            linkHosted: "",
            src: reactParallax

        },

        {
            id: 5,
            linkGithub: "https://github.com/sameep-s?tab=repositories",
            linkHosted: "",
            src: reactSmooth

        },

        {
            id: 6,
            linkGithub: "https://github.com/sameep-s?tab=repositories",
            linkHosted: "",
            src: reactWeather

        },
    ]

    return (
        <>
            <div name="Projects" className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
                <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full ">

                    <div className="pb-8">
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Projects</p>

                        <p className='py-6 ' >Checkout out my Projects!</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mx-auto  ">

                        {projects?.map(project =>

                            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                                <img src={project.src} alt="project_image" className='rounded-md ' />
                                <div className=" flex justify-center items-center">
                                    <button onClick={() => window.open(project.linkGithub, "_blank")} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Code</button>
                                    <button onClick={() => window.open(project.linkHosted, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                </div>
                            </div>

                        )}


                    </div>

                </div>
            </div>
        </>
    );
};

export default Projects;