import { connect } from "react-redux"
import { buy2, buyer } from "./Redux/Cake/Action"

const CakeContainer = (props) => {
    return (
        <div className='flex justify-center'>
            <div className='h-screen grid place-content-center mr-10'>
                <h1 className='border-b border-black pb-5 text-3xl mb-10'>number of cakes - {props.numOfcake}</h1>
                <button className=' rounded-lg p-5 bg-yellow-400 text-xl font-bold border-dotted border-pink-500 border-[3px]' onClick={props.buyer}>buy cake</button>
            </div>

            <div className='h-screen grid place-content-center'>
                <h1 className='border-b border-black pb-5 text-3xl mb-10'>number of Food - {props.numOffood}</h1>
                <button className=' rounded-lg p-5 bg-pink-400 text-xl font-bold border-dotted border-yellow-500 border-[3px]' onClick={props.buy2}>buy Food</button>
            </div>
        </div>
    )
}

const mapStatePropes = state => {
    return {
        numOfcake: state.numOfcake,
        numOffood: state.numOffood  
    }
}

const mapDispatchToPropes = dispatch => {
    return {
        buyer: () => dispatch(buyer()),
        buy2: () => dispatch(buy2())
    }
}
export default connect(mapStatePropes, mapDispatchToPropes)(CakeContainer)
