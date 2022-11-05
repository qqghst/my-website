import React from 'react'
import Button from '../Components/UI/Button'
import { arrowBlack } from '../Assets/imports'

const Footer = () => {
    return (
        <section id='footer' className='bg-white mt-[100px] pt-[140px] pb-[180px] flex flex-col justify-center'>
            <div className='container mx-auto flex flex-col justify-start px-[32px] items-start gap-[80px] sm:gap-0 sm:flex sm:flex-row sm:justify-between sm:items-start sm:px-0'>
                <div>
                    <p className='text-[#7f7f7f] tracking-regularText mb-[16px] text-base'>got a project in mind?</p>
                    <h1 className='text-[#262626] font-bold leading-[110%] tracking-bigText text-[33.18px] sm:text-[47.78px] lg:text-[68.8px] mt-[16px] mb-[32px]'>DON'T BE SHY,<br /><span className='underline underline-offset-[8px] '>TEXT ME.</span></h1>
                    <Button type='button' className='text-black font-light text-[16px] flex flex-row items-center'>
                        <a className='font-jetBrains' href="mailto:theicesilver121@mail.ru">contact me</a>
                        <div className='-rotate-90'>
                            <img
                                className='px-[16px] animate-bounce'
                                src={arrowBlack}
                                alt="scroll down"
                            />
                        </div>
                    </Button>
                </div>
                <div className=''>
                    <h2 className='text-[#262626] font-bold leading-[110%] tracking-bigText text-[33.18px] sm:text-[27.65px] lg:text-[33.81px] mb-[32px]'>KEEP IN TOUCH</h2>
                    <div className=''>
                        <ul>
                            <li className='font-jetBrains mb-[32px] sm:mb-[80px]'>
                                <a href="">THEICESILVER121@mail.ru</a>
                            </li>
                        </ul>
                        <div className='flex flex-row gap-[16px] sm:flex sm:flex-col sm:gap-[8px] font-jetBrains'>
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