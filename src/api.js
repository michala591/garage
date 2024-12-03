// const cars = [{ car: "Honda", number: "1234567" }]

import axios from 'axios';

const BASE_URL = 'http://localhost:3005'; // URL of your json-server

export const getAllCars = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cars`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
};


