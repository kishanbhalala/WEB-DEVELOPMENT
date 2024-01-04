import { useState } from "react"


const MultiStates = () => {
    const [age, setage] = useState(18);
    const [name, setname] = useState("prashant");
    const [name1, setname1] = useState("ps");
    const [todos, settodos] = useState("sharp");

    function box1() {
        setage(age + 1)
    }
    function box2() {
        setname("kishan")
    }
    function box3() {
        setname1("jeegar")
    }
    function box4() {
        settodos("smart jeegar!")
        settodos("intelligent kishan!")
        settodos("clever sagar!")
    }

    function Reset() {
        setage(20)
        setname("urvesh")
        setname1("jenish")
        settodos("hensome boy")
    }

    return (
        <div className="flex justify-between bg-slate-600 rounded-2xl">
            <button className="button" onClick={box1}>{age}</button>
            <button className="button" onClick={box2}>{name}</button>
            <button className="button" onClick={box3}>{name1}</button>
            <button className="button" onClick={box4}>{todos}</button>
            <button className="button" onClick={Reset}>reset</button>
        </div>
    )
}

export default MultiStates
