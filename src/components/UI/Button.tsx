import React from 'react';
import styles from './../../styles'

interface ButtonProps {
    children: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({children}: ButtonProps) => {
    return (
        <button type='button' className={`${styles.button}`}>
            {children}
        </button>
    );
};

export default Button;