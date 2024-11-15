import Image from 'next/image'
import nature from '../../public/nature.jpg'

const UseImage = () => {
    return (
        <div>
            {/* <Image src={nature} alt="Nature" /> */}

            <img src="/nature.jpg" alt="" />

        </div>
    )
}

export default UseImage
