import React, { useState } from 'react';

const Accordian = ({heading, content}) => {
    const [show, setShow] = useState(false);
    
    return (
        <div className='bg-base-200 rounded-lg'>
            <div onClick={()=>setShow(!show)} className='my-5 h-20 text-2xl flex items-center rounded-lg bg-base-300 '>
                <p>{show ? '➖' : '➕'}</p>
                <p>{heading} </p>
            </div >
                {show && <div className='shadow-lg pr-4 pl-4 pb-4 '>{content}</div> }
            
        </div>
    );
};

export default Accordian;