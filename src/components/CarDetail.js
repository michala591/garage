import { useState } from 'react';

function CarDetail({ cars, editCar, deleteCar, updatedCars }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editCarDetails, setEditCarDetails] = useState({ car: "", number: "" });

    function startEditing(index) {
        setEditingIndex(index);
        setEditCarDetails(cars[index]); // Pre-fill with existing car details
    }

    function submitEdit(index) {
        editCar(index, editCarDetails); // Call the parent function to update the car
        setEditingIndex(null); // Exit edit mode
    }

    return (
        <div className="card">
            {updatedCars().map((car, index) => (
                <div key={index} className="card">
                    {editingIndex === index ? (
                        <div>
                            <input
                                value={editCarDetails.car}
                                onChange={(e) =>
                                    setEditCarDetails({ ...editCarDetails, car: e.target.value })
                                }
                            />
                            <input
                                type="number"
                                value={editCarDetails.number}
                                onChange={(e) =>
                                    setEditCarDetails({
                                        ...editCarDetails,
                                        number: Number(e.target.value),
                                    })
                                }
                            />
                            <button
                                type="button"
                                className="card-button"
                                onClick={() => submitEdit(index)}
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        <div className="card-content">
                            {car.car} - {car.number}
                            <button
                                type="button"
                                className="card-button"
                                onClick={() => startEditing(index)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="card-button"
                                onClick={() => deleteCar(index)}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CarDetail;
