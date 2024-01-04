import React from 'react'

 const Loop = ({ guest }) => {
    return (
        <h2>Tea cup for guest @{guest}</h2>
    )
}


export default function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
        cups.push(<Loop key={i} guest={i} />);
    }
    return cups;
}
    