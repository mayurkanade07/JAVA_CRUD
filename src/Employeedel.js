import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function Employeedel() {

    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        const handleSubmit = (event) => {
            if (window.confirm("You want to delete the data") == true) {
                fetch("http://localhost:5221/api/Employee/" + id, {
                    method: 'DELETE',
                    headers: { 'Content-type': 'application/json' },
                }).then(r => { console.log(r) })

            } else {
                console.log("data not deleted")
            }
            event.preventDefault();
        navigate('/ListEmployee');
            alert("data deleted")
        }
        handleSubmit();
        return () => clearInterval(id);
    },[])



    return (
        <>
        </>
    );
} 