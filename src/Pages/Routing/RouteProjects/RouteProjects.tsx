import React from 'react'
import style from '../RouteProjects/RouteProjects.module.scss'

interface IRouteProjects { }

const RouteProjects: React.FC<IRouteProjects> = () => {
    return (
        <section className='container mx-auto'>
            <div className={`flex flex-col py-[300px] gap-[300px]`}>
                <div className='flex flex-col justify-center items-center gap-[140px] md:flex-row md:justify-end md:items-end'>
                    <a href="/">
                        <figure className={`${style.figure} rotate-90`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                    <a href="/" className='translate-y-32'>
                        <figure className={`${style.figure}`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>

                <div className='flex flex-col justify-center items-center gap-[140px] md:flex-row md:justify-start md:items-start'>
                    <a href="/">
                        <figure className={`${style.figure}`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                    <a href="/" className='translate-y-32'>
                        <figure className={`${style.figure} rotate-90`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default RouteProjects;