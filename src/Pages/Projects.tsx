import React from 'react'

const Projects: React.FC = () => {
    return (
        <section className='min-h-screen flex flex-col justify-center mt-[100px]'>
            <div className='container mx-auto'>
                <div>
                    <div className='flex justify-center mb-[180px]'>
                        <a href="#" className='w-[970px] h-[485px] bg-white'></a>
                    </div>
                    <div className='flex flex-row gap-[160px]'>
                        <div className='flex justify-start'>
                            <a href="#" className='w-[745px] h-[485px] bg-white'></a>
                        </div>
                        <div className='flex'>
                            <a href="#" className='w-[745px] h-[400px] bg-white'></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center mb-[180px] mt-[180px]'>
                        <a href="#" className='w-[970px] h-[485px] bg-white'></a>
                    </div>
                    <div className='flex flex-row gap-[160px]'>
                        <div className='flex'>
                            <a href="#" className='w-[745px] h-[400px] bg-white'></a>
                        </div>
                        <div className='flex justify-end'>
                            <a href="#" className='w-[745px] h-[485px] bg-white'></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects