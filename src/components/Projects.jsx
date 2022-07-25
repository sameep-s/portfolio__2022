import React from 'react';

import flipKicks from '../assets/portfolio/FlipKick.png';
import aphro from '../assets/portfolio/aphroCSS.png';
import sickVids from '../assets/portfolio/sickVids.png';
import socialMedia from '../assets/portfolio/socialMedia.png';
import justCrossIt from '../assets/portfolio/justCrossIt.png';
import IPL from '../assets/portfolio/iplTrivia.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            linkGithub: "https://github.com/sameep-s/flipkicks_ecomm",
            linkHosted: "https://flipkickss.netlify.app/",
            src: flipKicks

        },

        {
            id: 2,
            linkGithub: "https://github.com/sameep-s/Aphro_CSS-Library",
            linkHosted: "https://aphro-css.netlify.app/",
            src: aphro

        },

        {
            id: 3,
            linkGithub: "https://github.com/sameep-s/sickVids_videoLibrary",
            linkHosted: "https://sick-vids-video-library.vercel.app/",
            src: sickVids

        },

        {
            id: 4,
            linkGithub: "https://github.com/sameep-s/JustPostIt",
            linkHosted: "https://just-post-it.vercel.app/",
            src: socialMedia

        },

        {
            id: 5,
            linkGithub: "https://github.com/sameep-s/match__buzz",
            linkHosted: "https://match-buzz.vercel.app/",
            src: IPL

        },

        {
            id: 6,
            linkGithub: "https://github.com/sameep-s/justCrossIt",
            linkHosted: "https://justcrossit.vercel.app/",
            src: justCrossIt

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

                            <div key={project.id} className="shadow-md object-fill shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                                <img src={project.src} alt="project_image" className='rounded-md object-fill ' />
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