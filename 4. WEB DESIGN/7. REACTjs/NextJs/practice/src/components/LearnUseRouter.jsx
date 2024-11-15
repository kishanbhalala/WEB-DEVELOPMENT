"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const LearnUseRouter = () => {

    const router = useRouter()
    // console.log("router..", router);
    return (
        <div>
            <h1>using useRouter</h1>

            <button type='button' onClick={() => router.push("/admin/dashb")} className='border'>routing goto Dash</button>
        </div>
    )
}

export default LearnUseRouter
