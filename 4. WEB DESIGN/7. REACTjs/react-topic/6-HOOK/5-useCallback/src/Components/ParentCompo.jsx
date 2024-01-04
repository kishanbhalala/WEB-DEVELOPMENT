import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentCompo = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000);
    },[salary])


    return (
        <>
            <Title />

            <Count text="Age" count={age} />
            <Button handlClick={incrementAge}>Increment Age</Button>

            <Count text="Salary" count={salary} />
            <Button handlClick={incrementSalary}>Increment Salary</Button>
        </>
    )
}

export default ParentCompo
