import React, { FC } from 'react';

interface ButtonProps {
    btn: string;
}

const Button: FC<ButtonProps> = ({ btn }) => {
    return (
        <div className='flex justify-center'>
            <button
                className='py-2 px-4 bg-blue-700 font-bold
                 hover:bg-white text-white hover:text-black rounded-xl mt-8'
            >
                {btn}
            </button>
        </div>
    )
}

export default Button;