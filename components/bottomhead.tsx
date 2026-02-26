import React from 'react'

export default function Bottomhead(){
    return(
        <>
        <div className='footerhead'>
            <p> Join our news letter</p>
        <p>Stay in the loop with airdrops, launches, and DeFi secrets.</p>
        <div className='theinput'>
            <input placeholder='Enter your email' className='input_txt'/>
            <button className='search_button'> Search </button>
        </div>
        </div>
        </>
    )
}