import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../../utils/scroll-observer';
import styles from '../styles/Text.module.css';

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
        <section ref={refContainer} className='bg-background container mx-auto text-whiteOppacity'>
            <div className='min-h-screen max-w-4xl py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-[40px] sm:text-[68.8px] md:text-6xl lg:text-7xl tracking-bigText font-semibold'>
                <div className='leading-[120%] mb-[32px]'>
                    <div className={styles.text} style={{opacity: opacityForBlock(progress, 0)}}>I don&apos;t know what to write here?</div>
                    <span className={`${styles.text} inline-block after:content-['_']`} style={{opacity: opacityForBlock(progress, 1)}}>So... I just gonna put this text right here because i really like it, but in the future there will be something worthwhile.</span>
                    <span className={`${styles.text} inline-block`} style={{opacity: opacityForBlock(progress, 2)}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
            </div>
        </section>
    )
}

export default Text;
