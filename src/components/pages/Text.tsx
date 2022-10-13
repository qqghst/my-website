import React from 'react';
import styles from '../styles/Text.module.css'

const Text: React.FC = () => {
    return (
        <section className='bg-background container mx-auto text-whiteOppacity'>
            <div className='min-h-screen max-w-4xl py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-bigText font-semibold'>
                <div className='leading-[120%] mb-[32px]'>
                    <div className={styles.text}>I don&apos;t know what to write here?</div>
                    <span className={`${styles.text} inline-block after:content-['_']`}>So... I just gonna put this text right here because i really like it, but in the future there will be something worthwhile.</span>
                    <span className={`${styles.text} inline-block`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
            </div>
        </section>
    )
}

export default Text;
