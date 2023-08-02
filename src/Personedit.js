import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function Personedit(props) {
    const [person, setPerson] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("'http://localhost:8085/person/" + id)
            .then(res => res.json())
            .then((result) => {
                setPerson(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(person);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8085/person/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/Person');

        alert(person._id);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="text"
                name="_id"
                value={person._id || ""}
                onChange={handleChange}
            />
            <br />  <label>First name:</label>
            <input
                type="text"
                name="firstname"
                value={person.firstname || ""}
                onChange={handleChange}
            />
            <br /> <label>Last Name:</label>
            <input
                type="text"
                name="lastname"
                value={person.lastname || ""}
                onChange={handleChange}
            />

            <input type="submit" />
        </form>
    );
} 