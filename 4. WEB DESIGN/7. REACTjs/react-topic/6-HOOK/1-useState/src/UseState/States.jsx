import React from 'react';
import { ImageList } from './data';
import { useState } from 'react';

const States = () => {

    // let index = 0;

    const [index, setIndex] = useState(0);

    function Next() {
        setIndex(index + 1)
    }
    function Prev() {
        setIndex(index - 1)
    }
    // console.log(index);

    let Image = ImageList[index];

    return (
        <div className="h-[500px] w-[450px] bg-slate-400 m-auto shadow-2xl p-10">

            <button className='h-6 w-20 bg-white' onClick={Prev}>Prev</button>
            <button className='h-6 w-20 bg-white mx-10' onClick={Next}>Next</button>

            <div>
                <h2>
                    <b>{Image.title}</b>
                </h2>
                <h3>
                    ({index + 1} of {ImageList.length})
                </h3>
                <img src={Image.url} alt="" />
                <p>
                    {Image.description}
                </p>
            </div>

        </div>
    )
}

export default States
