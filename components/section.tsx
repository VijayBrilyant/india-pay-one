import React, { ReactNode } from 'react'

interface Props{
    className?:string;
     children:ReactNode
}

const Section:React.FC<Props> = ({children, className=''}) => {
  return  <div className={`md:px-40 px-10 ${className}`}> {children} </div> ;
}

export default Section