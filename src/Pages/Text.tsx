import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../Utils/scroll-observer';
import Styles from '../Styles/Text.module.css';

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
        <section ref={refContainer} className='flex flex-col justify-center'>
            <div className='container mx-auto py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-[40px] sm:text-[57.33px] tracking-bigText font-semibold text-whiteOppacity'>
                <div className='leading-[110%]'>
                    <div className={`${Styles.text} mb-5`} style={{opacity: opacityForBlock(progress, 0)}}>My name is Dmitry, I am <br />  22 years old.</div>
                    <span className={`${Styles.text} inline-block after:content-['_'] mb-5`} style={{opacity: opacityForBlock(progress, 1)}}>Doing frontend develop <br /> and ux/ui design. Years <br /> ago i was working as <br /> ux/ui design, so i love <br /> making tasty designs.</span>
                    <span className={`${Styles.text} inline-block mb-5`} style={{opacity: opacityForBlock(progress, 2)}}>Currently free for work, <br /> if you are intersting, <br /> feel free to contact me :)</span>
                </div>
            </div>
        </section>

        // <section ref={refContainer} className='flex flex-col justify-center'>
        //     <div className='container mx-auto max-w-4xl py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center md:text-6xl lg:text-7xl tracking-bigText font-semibold text-whiteOppacity'>
        //         <div className='leading-[120%] mb-[32px] text-[40px] sm:text-[57.33px]'>
        //             <div className={Styles.text} style={{opacity: opacityForBlock(progress, 0)}}>My name is Dmitry, I am <br />  22 years old.</div>
        //             <span className={`${Styles.text} inline-block after:content-['_']`} style={{opacity: opacityForBlock(progress, 1)}}>Doing frontend develop <br /> and ux/ui design. Years <br /> ago i was working as <br /> ux/ui design, so i love <br /> making tasty designs.</span>
        //             <span className={`${Styles.text} inline-block`} style={{opacity: opacityForBlock(progress, 2)}}>Currently free for work, <br /> if you are intersting, <br /> feel free to contact me :)</span>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Text;
