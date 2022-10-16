import React, { DOMAttributes } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset'

export interface IButton extends DOMAttributes<HTMLButtonElement> {
    className?: string,
    typeButton?: ButtonType,
    onClick?: (event: )
}

const Button: React.FC = () => {
    return (
        <button></button>
    )
}

export default Button;

// import React from 'react';

// interface ButtonProps {
//     children: React.ReactNode,
// }

// const Button: React.FC<ButtonProps> = ({children}: ButtonProps ) => {
//     return (
//         <button className={`text-whiteOppacity font-regular text-[16px] flex flex-row items-center`}>
//             {children}
//         </button>
//     );
// };

// export default Button;

