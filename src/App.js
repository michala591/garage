import { useState, useEffect } from 'react';
import './App.css';
import CarDetail from './components/CarDetail';
import NewCar from './components/NewCar';
import { getAllCars } from './api';

function App() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch cars from the API
  useEffect(() => {
    async function fetchCars() {
      const fetchedCars = await getAllCars();
      setCars(fetchedCars);
    }
    fetchCars();
  }, []);

  function deleteCar(i) {
    const newCars = cars.filter((car, carIndex) => carIndex !== i);
    setCars(newCars);
  }

  function editCar(index, updatedCar) {
    console.log("edit");
    const updatedCars = [...cars]; // Create a copy of the cars array
    updatedCars[index] = updatedCar; // Update the specific car
    setCars(updatedCars); // Update the state
  }

  function updatedCars() {
    return cars.filter((car) =>
      car.car.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  return (
    <>
      Search:
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <br />
      <NewCar cars={cars} setCars={setCars} />
      <CarDetail cars={cars} deleteCar={deleteCar} editCar={editCar} updatedCars={updatedCars} />
    </>
  );
}

export default App;
