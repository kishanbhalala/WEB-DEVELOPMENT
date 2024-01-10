import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy2, buyer } from './Redux/Cake/Action'

const HookCakeContainer = () => {

    const numOfcake = useSelector(state => state.numOfcake)
    const numOffood = useSelector(state => state.numOffood)

    const dispatch = useDispatch()

    return (
        <>
            <div>
                <div className='text-center mb-10'>
                    <h1 className='underline underline-offset-2 mb-3 text-2xl'>Num Of Cakes - {numOfcake}</h1>
                    <button className='bg-blue-400 rounded-md p-3' onClick={() => dispatch(buyer())}>Buy Cake</button>
                </div>

                <div className='text-center'>
                    <h1 className='underline underline-offset-2 mb-3 text-2xl'>Num Of Food - {numOffood}</h1>
                    <button className='bg-red-400 rounded-md p-3' onClick={() => dispatch(buy2())}>Buy Food</button>
                </div>
            </div>
        </>
    )
}

export default HookCakeContainer
