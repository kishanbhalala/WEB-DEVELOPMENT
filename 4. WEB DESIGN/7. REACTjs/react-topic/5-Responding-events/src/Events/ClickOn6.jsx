import React from 'react'

const Btn = ({onClick,Children}) => {
    return <button className='button' onClick={onClick}>{Children} click</button>
};

const Playbtn = ({ moviename }) => {
    const PlayClick = () => {
        alert(`playing ${moviename}!!`)
    }
    return <Btn onClick={PlayClick}> play {moviename}</Btn>
}

const Uploadbtn = () => {
    return <Btn onClick={() => alert("uploading!")}>upload</Btn>
}


const ClickOn6 = () => {
    /* Passing event handlers as props */
    return (
        <div>
            <h1 className='text-6xl'>Passing event handlers as props</h1>

            <Playbtn moviename="KGF">play movie</Playbtn>
            
            <Uploadbtn/>
        </div>
    )
}

export default ClickOn6




