import React from 'react';

const About = () => {
    return (
        <>
            <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                    <div className="pb-2">
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
                    </div>

                    <p className='text-xl mt-20  '>
                        My name is Sameep Sharma and I am a Front-End developer currently looking for Front-End roles.
                        <br />
                        <br />
                        I have a knack for good design and UI and have good knowledge of ReactJS, Typescript, and Javascript concepts such as Closures, Event-Loop, Hoisting, Callbacks, Promises, etc. I have also worked with state management tools such as REDUX and CONTEXT-API and handled asynchronous network calls in Javascript using Async/Await.
                    </p>

                    <br />

                    <p className='text-xl' >

                        I have created 5 complex projects using ReactJS, Redux, Aphro-CSS(My component library), context-API, react-router, HTML5/CSS3, and Javascript. those Projects which can be found in projects section.
                        <br />


                        These projects are hosted and the source code is available on Github.
                        <br />
                        <br />
                        Please find my attached resume. Feel free to contact me directly should you require anything further.
                        <br />

                    </p>

                </div>

            </div>
        </>
    )
}

export default About;