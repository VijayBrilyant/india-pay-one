import { MoveRight } from 'lucide-react';
import React, { ReactNode } from 'react'

interface ButtonProps {
    onClick: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    children:ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, className, type='button', children }) => {
    return (
    <button type={type} className={`${className} text-[16px] border-none text-white rounded-[8px] flex gap-2 cursor-pointer`} onClick={onClick}
    >{children}</button>
)}

export default Button