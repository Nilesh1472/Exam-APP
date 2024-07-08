import { useState } from 'react';
function Timer(){
    const [minutes,setMinutes]=useState(0);
    return(
        <div className='timer'>
            <div className='container'>
                <h1 className='h1'> Timer</h1>

            </div>

        </div>
    )
}