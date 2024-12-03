import React, { useState } from 'react'

function NewCar({ cars, setCars }) {
    const [car, setCar] = useState("")
    const [number, setNumber] = useState(0)
    function submit() {

        const newCar = cars.slice()
        newCar.push({ car, number })
        setCars(newCar)
        setCar("")
        setNumber("")
    }
    return (
        <div className="card">
            <div className="card-content">
                add a new car
            </div>
            model: <input value={car} onChange={(e) => setCar(e.target.value)} />
            number: <input value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            <div>
                <button type="button" className="card-button" onClick={submit}>submit</button>
            </div>
        </div>
    )
}

export default NewCar