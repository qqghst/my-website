import React from 'react';

interface ButtonProps {
    children: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({children}: ButtonProps) => {
    return (
        <button type='button' className={`text-whiteOppacity font-regular text-[16px] flex flex-row items-center`}>
            {children}
        </button>
    );
};

export default Button;