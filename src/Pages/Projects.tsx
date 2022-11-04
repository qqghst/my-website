import React from 'react';
import Button from '../Components/UI/Button';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
    return (
        <section className='min-h-screen flex flex-col justify-center pt-[180px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-[180px] mb-[180px] flex-wrap px-[32px] md:px-0'>
                    <div className='flex justify-center'>
                        <a href="">
                            <figure>
                                <img className='h-[500px] w-[1000px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="/" />
                                <div>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </a>
                    </div>
                    <div className='flex flex-col gap-[180px] items-end md:flex-row md:gap-0 justify-evenly'>
                        <a href="">
                            <figure>
                                <img className='h-[300px] w-[600px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="/" />
                                <div>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </a>
                        <a href="" className='translate-y-[-160px]'>
                            <figure>
                                <img className='h-[200px] w-[400px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="/" />
                                <div>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col gap-[180px] mb-[180px] flex-wrap px-[32px] md:px-0'>
                    <div className='flex justify-end'>
                        <a href="">
                            <figure>
                                <img className='h-[500px] w-[1000px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="/" />
                                <div>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </a>
                    </div>
                    <div className='flex flex-col gap-[180px] items-end md:flex-row md:gap-0 justify-evenly'>
                        <a href="" className='translate-y-[-160px]'>
                            <figure>
                                <img className='h-[200px] w-[400px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="/" />
                                <div>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </a>
                        <a href="">
                            <figure>
                                <img className='h-[300px] w-[600px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="/" />
                                <div>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects