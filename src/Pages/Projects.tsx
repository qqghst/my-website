import React from 'react';
import Button from '../Components/UI/Button';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
    return (
        <section className='flex flex-col justify-around gap-[300px] mt-[150px]'>
            <div className='flex flex-col gap-[150px] container mx-auto'>
                <div>
                    <a href="/" className='flex justify-around items-center shrink-0'>
                        <figure className={`${styles.figure}`}>
                            <img className='flex justify-center min-w-[1000px] h-[500px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
                <div className='flex flex-row gap-[80px] items-start flex-wrap'>
                    <a href="/" className=''>
                        <figure>
                            <img className='min-w-[650px] h-[350px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                    <a href="/" className='translate-y-40'>
                        <figure>
                            <img className=' min-w-[450px] h-[250px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-[150px] container mx-auto'>
                <div>
                    <a href="/" className='flex justify-around items-center shrink-0'>
                        <figure>
                            <img className='flex justify-center min-w-[1000px] h-[500px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
                <div className='flex flex-row-reverse gap-[80px] items-start flex-wrap'>
                    <a href="/" className=''>
                        <figure>
                            <img className='min-w-[650px] h-[350px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                    <a href="/" className='translate-y-40'>
                        <figure>
                            <img className=' min-w-[450px] h-[250px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
            </div>
            {/* <div className='flex flex-col gap-[150px] container mx-auto'>
                <div>
                    <a href="/" className='flex justify-around items-center shrink-0'>
                        <figure>
                            <img className='flex justify-center min-w-[1000px] h-[500px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                            <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                        </figure>
                    </a>
                </div>
            </div> */}
            <div className='flex justify-center items-center'>
                <Link to='/projects' className=''>
                    <Button type='button' className='rounded-full bg-whiteOppacity w-[160px] h-[160px] text-black'>
                        <span className='font-jetBrains'>view all</span>
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Projects