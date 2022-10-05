import React from 'react';
import styles from '../../styles';

const Text: React.FC = () => {
    return (
        <section className='mt-[300px]'>
            <h1 className={`${styles.heading1} mb-[32px]`}>I don't know what to write here?</h1>
            <h1 className={`${styles.heading1} text-whiteOppacity32 mb-[32px]`}>So... I just gonna put this text right here because i really like it, but in the future there will be something worthwhile.</h1>
            <h1 className={`${styles.heading1} text-whiteOppacity32 mb-[32px]`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        </section>
    )
}

export default Text;
