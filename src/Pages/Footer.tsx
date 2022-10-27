import React from 'react'
import Button from '../Components/UI/Button'
import { arrow } from '../Assets/imports'

const Footer = () => {
    return (
        <section id='footer' className='bg-white pt-[140px] pb-[220px] flex flex-col justify-center'>
            <div className='container mx-auto flex justify-between items-start'>
                <div>
                    <p className='text-[#7f7f7f] tracking-regularText mb-[16px] text-base'>got a project in mind?</p>
                    <h1 className='text-[#262626] font-bold leading-[110%] tracking-bigText text-[40px] sm:text-[68.8px] mt-[16px] mb-[32px]'>DON'T BE SHY,<br /><span className='underline underline-offset-[8px] '>TEXT ME.</span></h1>
                    <Button type='button'>
                        <span className='font-jetBrains bg-gradient-to-r bg-clip-text text-transparent from-black to-black hover:from-[#224078] hover:to-[#A42C7B]'>contact me</span>
                        <img
                            className='px-[16px] animate-bounce '
                            src={arrow}
                            alt="scroll down"
                        />
                    </Button>
                </div>
                <div>
                    <h2 className='text-[#262626] font-bold leading-[110%] tracking-bigText text-[20px] sm:text-[39.81px] mb-[32px]'>KEEP IN TOUCH</h2>
                    <div>
                        <ul>
                            <li className='mb-[80px]'>
                                <a href="">THEICESILVER121@mail.ru</a>
                            </li>
                        </ul>
                        <div className='flex flex-col gap-[8px] font-jetBrains'>
                            <ul>
                                <li>
                                    <a href="">github</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">behance</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">CV</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer