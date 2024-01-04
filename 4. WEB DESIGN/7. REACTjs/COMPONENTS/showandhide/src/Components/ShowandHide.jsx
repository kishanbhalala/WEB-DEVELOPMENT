import React, { useState } from 'react'
import { animated, useSpring } from "react-spring";

import imgDoctor from "../assets/1.jpg";
import imgChef from "../assets/2.jpg";
import imgPolice from "../assets/3.jpg";
import imgEngineer from "../assets/4.jpg";


const ShowandHide = () => {
    const professions = ["police", "chef", "doctor", "engineer"];
    const [myProfession, setMyProfession] = useState("");
    return (
        <>

            <div className="row w-100">
                <div className="text-center">
                    <h2>Select the profession you like the most</h2>
                    <br />
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {professions.map(profession => (
                            <>

                                <button
                                    type="button"
                                    key={profession}
                                    className={"btn btn-light border-dark "}
                                    onClick={() => setMyProfession(profession)}
                                >
                                    {profession.toLocaleUpperCase()}
                                </button>
                            </>
                        ))}
                    </div>
                </div>

                <div className="col text-center">
                    <p>{myProfession}</p>

                    <p>
                        {myProfession === "police" && (
                            <ProfessionImage src={imgPolice} />
                        )}
                        {myProfession === "chef" && (
                            <ProfessionImage src={imgChef} />
                        )}
                        {myProfession === "doctor" && (
                            <ProfessionImage src={imgDoctor} />
                        )}
                        {myProfession === "engineer" && (
                            <ProfessionImage src={imgEngineer} />
                        )}
                    </p>
                </div>
            </div>
        </>
    )
}

const ProfessionImage = ({ src }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <div>
            <div className='flex justify-center'>
                <animated.img
                    src={src}
                    alt=""
                    style={{ width: "250px", height: "250px", ...props, borderRadius: "50%" }}
                />
            </div>
        </div>
    );
};

export default ShowandHide
