import React from 'react';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function Touredit(props) {
    const [tour, setTour] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    // useEffect(() => {
    //     fetch("http://localhost:8080/api/tours/" + id)
    //         .then(res => res.json())
    //         .then((result) => {
    //             setTour(result);
    //         }
    //         );
    // }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTour(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(tour);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/tours/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => {  })
        event.preventDefault();
        navigate('/Tour');

        alert(tour);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input
                type="text"
                name="t_id"
                value={tour.t_id || ""}
                onChange={handleChange}
            />
            <br />            <label>Type:</label>
            <input
                type="text"
                name="type"
                value={tour.type || ""}
                onChange={handleChange}
            />
            <br />            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={tour.name || ""}
                onChange={handleChange}
            />
            <br />            <label>Cost:</label>
            <input
                type="text"
                name="cost"
                value={tour.cost || ""}
                onChange={handleChange}
            /><br />            <label>Duration:</label>
            <input
                type="text"
                name="duration"
                value={tour.duration || ""}
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
        </form>
    );
} 