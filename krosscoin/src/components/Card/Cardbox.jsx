import React from 'react'
import style from './style.css'

export default function Cardbox({ children, className }) {
    return (
        <>
            <div className="p-3">
                <div className={'bg-white text-black rounded-md p-5 ' + className}>
                    {children}
                </div>
            </div>
        </>
    )
}