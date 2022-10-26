import React from 'react';
import Button from '../Components/UI/Button';
import { leftImg, arrow, line, doctor } from "../Assets/imports";
import { Link } from 'react-router-dom';

const AboutNew: React.FC = () => {
    return (
        <section className='bg-white py-[160px] flex flex-col justify-center'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-[#000000CC] text-[23.04px] sm:text-[39.81px] font-light leading-[140%] tracking-[-1.25px]'>My name is <span className='text-[#00000052]'>Dmitry</span>, I am 22 years old. <br />Doing <span className='text-[#00000052]'>frontend</span> development and <span className='text-[#00000052]'>ux/ui</span> <br />design. Feel free to contact me:)</p>
                    </div>
                    <div>
                        <p className='text-[16px] leading-[180%] mb-[80px] font-light'>Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. Amet,<br/> eligendi velit fuga quasi rem quisquam <br/>perferendis quibusdam omnis sit <br/></p>
                        {/* <button className='rounded-full bg-black w-[160px] h-[160px] text-white font-jetBrains'>
                            read more
                        </button> */}
                        <Button type='button'>
                            <Link className='flex flex-row items-center bg-gradient-to-r bg-clip-text text-transparent from-black to-black hover:from-[#224078] hover:to-[#A42C7B]' to='/about'>
                                read more
                                <img
                                    className='px-[16px] animate-bounce bg-black'
                                    src={arrow}
                                    alt="scroll down"
                                />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutNew