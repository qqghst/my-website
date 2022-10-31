import React from 'react'

interface IRouteAbout { }

const RouteAbout: React.FC<IRouteAbout> = () => {
    return (
        <section className='min-h-screen flex flex-col justify-cente py-[260px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-[64px] max-w-2xl mb-[180px]'>
                    <h3 className='text-whiteOppacity text-[23.04px] tracking-[3px] font-semibold'>ABOUT PAGE.</h3>
                    <div className='flex flex-col gap-[32px] font-jetBrains text-[#FFFFFFA3] leading-[200%]'>
                        <p>Hello again! My name is Dmitry. I do frontend development + ux/ui design. I started my career in web as ux/ui designer. Then, after some time, having beeni n role of a web designer I wanted more... I tried to make a site using only HTML, CSS. A week later, understanding how it
                            all works, I finally made a simple website and it feel incredible! But it was only beginning...</p>
                        <p>Hello again! My name is Dmitry. I do frontend development + ux/ui design. I started my career in web as ux/ui designer. Then, after some time, having beeni n role of a web designer I wanted more... I tried to make a site using only HTML, CSS. A week later, understanding how it
                            all works, I finally made a simple website and it feel incredible! But it was only beginning...</p>
                        <p>And here I am. At the moment I am junior. But soon i will be senior! Learn Node js for backend,
                            React Native for mobile etc...</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[64px] max-w-2xl'>
                    <h3 className='text-whiteOppacity text-[23.04px] tracking-[3px] font-semibold'>MAIN SKILLS.</h3>
                    <div className='flex flex-row gap-[160px]'>
                        <div className='flex flex-col gap-[32px] font-jetBrains text-[#FFFFFFA3] leading-[200%]'>
                            FRONTEND DEV.: <br />
                            HTML, CSS, SCSS <br />
                            JavaScript <br />
                            TypeScript <br />
                            React <br />
                        </div>
                        <div className='flex flex-col gap-[32px] font-jetBrains text-[#FFFFFFA3] leading-[200%]'>
                            UX/UI DESIGN: <br />
                            Figma <br />
                            Photoshop <br />
                            Illustrator <br />
                            and good taste :) <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RouteAbout;