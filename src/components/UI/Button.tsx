import React from 'react';
import styles from './../../styles'

interface ButtonProps {
    children: React.ReactNode,
}

const Button = ({children}: ButtonProps) => {
    return (
        <button type='button' className={`${styles.button}`}>
            {children}
        </button>
    );
};

export default Button;