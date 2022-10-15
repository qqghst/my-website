import React from 'react'
import { line } from "../Assets/imports";

const Projects: React.FC = () => {
    return (
        <>
            <section className='min-h-screen flex flex-col justify-center'>
                <div className='text-white'>Projects</div>
            </section>
            <img src={line} alt="" />
        </>
    )
}

export default Projects