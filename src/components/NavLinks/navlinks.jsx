import React from 'react'
import ss from '../NavLinks/navlinks.module.css'

// const ula = ss.SectionOmovingBracketsne + ' ' + ss.squareBrackets;

const navlinks = () => {
    return (
        // <div className={ss.nav}>navlinks</div>
        // <a href="#" className={`${ss.movingBrackets} ${ss.squareBrackets}`}>HOVER ME</a>
        <a href="/about" className={ss.movingBrackets}>HOVER ME</a>
        
    )
}

export default navlinks