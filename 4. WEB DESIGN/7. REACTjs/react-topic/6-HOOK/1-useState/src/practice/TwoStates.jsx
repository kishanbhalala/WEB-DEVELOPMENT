import React from 'react'
import { useState } from 'react'
import { ImageList } from '../UseState/data';

const TwoStates = () => {

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState("");

    function Next() {
        setIndex(index + 1)
    }
    function Prev() {
        setIndex(index - 1)
    }
    function Show() {
        setShow(!show)
    }

    let Image = ImageList[index];

    // console.log(index);
    return (
        <div>
            <div>
                <div className="h-[500px] w-[500px] bg-slate-400 m-auto shadow-2xl p-10">
                    <button className='h-6 w-20 bg-white' onClick={Next}>Next</button>
                    <button className='h-6 ms-10 w-20 bg-white' onClick={Prev}>Prev</button>
                    <button className='h-6 ms-10 w-20 bg-white' onClick={Show}>
                        {show ? 'Hide' : 'Show'}Detail
                    </button>
                    <div className=" ">
                        <h2>
                            <b>{Image.title}</b>
                        </h2>
                        <h3>
                            ({index + 1} of {ImageList.length})
                        </h3>
                        <img src={Image.url} alt="" />
                        {show && <p>{Image.description}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoStates
