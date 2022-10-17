import React, { DOMAttributes } from 'react';

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
    type: 'button' | 'submit' | 'reset',
    onClick?: (event: React.MouseEvent) => void,
    children: React.ReactNode,
    icon?: any,
}

const Button: React.FC<IButtonProps> = ({ children, icon, type, onClick, ...props }) => {
    return (
        <button onClick={onClick} type={type} className='text-whiteOppacity font-light text-[16px] flex flex-row items-center'>
            {children}
        </button>
    )
}

export default Button;

// import React, { DOMAttributes } from 'react';

// export type ButtonType = 'button' | 'submit' | 'reset'

// export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
//     typeButton?: ButtonType,
//     onClick?: (event: React.MouseEvent) => void,
//     children: React.ReactNode,
// }

// const Button: React.FC<IButtonProps> = ({ children, typeButton, onClick, ...props }) => {
//     return (
//         <button className='text-whiteOppacity font-regular text-[16px] flex flex-row items-center'>
//             <span onClick={onClick} {...props}>{children}</span>
//         </button>
//     )
// }

// export default Button;


