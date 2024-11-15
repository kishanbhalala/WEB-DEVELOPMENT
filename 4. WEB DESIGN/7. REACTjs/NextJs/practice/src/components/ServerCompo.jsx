import React from 'react'

const ServerCompo = () => {
    return (
        <div>
            <h1>server components</h1>

            <div className='py-5'>
                <p>: Fetch data</p>
                <p>: Access backend resources (directly)</p>
                <p>: Keep sensitive information on the server (access tokens, API keys, etc)</p>
                <p>: Keep large dependencies on the server / Reduce client-side JavaScript</p>
            </div>

            <p>by default server component j hoi</p>
        </div>
    )
}

export default ServerCompo
