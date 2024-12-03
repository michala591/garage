import { useState } from "react";

function EditCar({ i, cars, setCars }) {
    const [car, setCar] = useState(cars[i].car);
    const [number, setNumber] = useState(cars[i].number);

    function submit() {
        // Create a copy of the cars array
        const updatedCars = [...cars];
        // Update the specific car
        updatedCars[i] = { ...updatedCars[i], car, number };
        // Update the cars state
        setCars(updatedCars);
        console.log("Car updated:", updatedCars[i]);
    }

    return (
        <div className="card">
            <div className="card-content">Edit Car</div>
            <label>
                Model:{" "}
                <input
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                />
            </label>
            <br />
            <label>
                Number:{" "}
                <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            </label>
            <div>
                <button type="button" className="card-button" onClick={submit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
export default EditCar