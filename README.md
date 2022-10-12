![hero.png](hero.png)
import React from 'react';
import sphere from '../../assets/about/sphere.png'
import styles, { layout } from "../../styles";
import Button from "../UI/Button";
import { leftImg } from "../../assets/imports";
import { readMoreBtn } from '../../assets/imports';

const About: React.FC = () => {
    return (
        <section id='about' className={layout.sectionReverse}>
            <div className='color-white'>
                <img
                    src={leftImg}
                    alt="" 
                />
            </div>
            <div className={layout.sectionInfo}> 
                <h2 className='text-whiteOppacity text-[39.81px] leading-[140%] tracking-mediumText'>About me section, don't know <br /> what to write here now, lorem ips <br /> um fishing.</h2>
                <Button>
                    read more
                    <img
                        src={readMoreBtn}
                        alt=""
                    />
                </Button>
            </div>
        </section>
    );
};

export default About;