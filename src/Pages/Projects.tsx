import React from 'react';
import Button from '../Components/UI/Button';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
    return (
        <section className='flex flex-col justify-center pt-[200px]'>
            <div className='mx-auto'>
                <div className='flex flex-col justify-center gap-[180px]'>
                    <div className='grid grid-cols-1 px-[16px] sm:px-0 sm:grid-cols-2 gap-[120px]'>
                        <a href="#" className='bg-whiteOppacity min-h-[485px] w-[970px] col-span-2'>
                        </a>
                        <a href="#" className={`bg-red-500 min-h-[485px]`}>
                            <img className={`${styles.img}`} src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="no" />
                            {/* <figcaption>Sorry Mom Tattoo</figcaption> */}
                        </a>
                        <a href="#" className='bg-blue-500 h-[385px]'>
                        </a>
                    </div>
                    <div className='grid grid-cols-1 px-[16px] sm:px-0 sm:grid-cols-2 gap-[120px]'>
                        <div className='bg-whiteOppacity min-h-[485px] w-[970px] col-span-2' />
                        <div className='bg-blue-500 h-[385px] ' />
                        <div className='bg-red-500 min-h-[485px]' />
                    </div>
                    <Link to='/projects' className=''>
                        <Button type='button' className='rounded-full bg-whiteOppacity w-[160px] h-[160px] text-black'>
                            <span className='font-jetBrains'>view all</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
        // <section className='flex flex-col justify-center'>
        //     <div className='container mx-auto'>
        //         <div className="overlap-group">
        //             <div className="items-center self-start flex flex-col gap-[180px] mx-auto">
        //                 <div className="bg-white h-[485px] w-[970px]"></div>
        //                 <div className="items-end flex gap-[130px]">
        //                     <div className="bg-white h-[485px] w-[745px]"></div>
        //                     <div className="bg-white h-[400px] w-[745px]"></div>
        //                 </div>
        //             </div>
        //             <div className="x2-1">
        //                 <div className="x4"></div>
        //                 <div className="flex-row">
        //                     <div className="x6"></div>
        //                     <div className="x5"></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Projects