import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import CardEmp from './CardEmp'
export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:5221/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        <div>
            <CardEmp key={id} myemp={employee} />
            {/* <label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Department:</label>
            {employee.department}<br /> */}
        </div>
        
    );
}
