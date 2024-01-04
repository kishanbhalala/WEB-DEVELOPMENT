// import PropTypes from 'prop-types'
import React from 'react'


const Btn = ({ message, childern }) => {
    return <button className='button' onClick={() => alert(message)}> click {childern}</button>
}


// ButtonAlert.propTypes = {
//      message : PropTypes.string,
//      children : PropTypes.element,
// }


const ClickOn5 = () => {
    /* Reading props in event handlers */

    return (
        <div>
            <h1 className='text-6xl'>Reading props in event handlers 5</h1>

            <Btn message="now playing">play</Btn>
            <Btn message="now uploading">update</Btn>

        </div>
    )
}

export default ClickOn5
