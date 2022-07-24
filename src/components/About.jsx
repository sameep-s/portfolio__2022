import React from 'react';

const About = () => {
    return (
        <>
            <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                    <div className="pb-2">
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
                    </div>

                    <p className='text-xl mt-20  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis porro ullam dicta vitae perspiciatis odit saepe esse eius provident officiis accusamus deleniti, mollitia a cumque, quaerat fugit aliquid dolore veritatis harum. Quisquam nemo aut culpa sed quasi recusandae optio placeat dicta. Ab facilis beatae quis fugit eaque repellendus hic odit.</p>

                    <br />

                    <p className='text-xl' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis adipisci quibusdam suscipit pariatur. Tenetur quos expedita illum, laboriosam distinctio ratione, earum voluptatem dolore unde fugiat, fugit incidunt! Fugit, natus corrupti.</p>

                </div>

            </div>
        </>
    )
}

export default About;