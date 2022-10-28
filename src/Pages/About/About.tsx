import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../../Utils/scroll-observer';
import Styles from './About.module.css';
import Button from '../../Components/UI/Button';
import { Link } from 'react-router-dom';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo;
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

const Text: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 3
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }

    return (
        <section ref={refContainer} className='py-[160px] flex flex-col justify-center'>
            <div className='container mx-auto'>
                <div className='flex justify-around'>
                    <div className='justify-center items-center md:text-6xl lg:text-7xl tracking-bigText font-semibold text-whiteOppacity'>
                        <div className='flex flex-col gap-[12px] leading-[130%] text-[23.04px] sm:text-[33.18px]'>
                            <div className={Styles.text} style={{ opacity: opacityForBlock(progress, 0) }}>My name is Dmitry, I am twenty two years old.<br />Located in Russia, Elista.</div>
                            <span className={`${Styles.text} after:content-['_']`} style={{ opacity: opacityForBlock(progress, 1) }}>Doing frontend development and ux/ui design.<br />Years ago i was working as a designer, so<br />i love making tasty designs.</span>
                            <span className={`${Styles.text}`} style={{ opacity: opacityForBlock(progress, 2) }}>Currently free for work, if you are intersting,<br />feel free to contact me :)</span>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-whiteOppacity text-[16px] leading-[180%] mb-[100px] font-light font-jetBrains'>My tech stack:<br />HTML, CSS, JavaScript, <br /> TypeScript, React, Redux, <br /> Tailwind, SCSS, Figma</p>
                        <Link to='/about' className=''>
                            <Button type='button' className='rounded-full bg-whiteOppacity w-[160px] h-[160px] text-black'>
                                <span className='font-jetBrains'>read more</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Text;