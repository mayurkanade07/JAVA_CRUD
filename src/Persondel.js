import React from 'react';
import {  useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function Persondel() {

    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        const handleSubmit = (event) => {
            if (window.confirm("You want to delete the data") === true) {
                fetch("http://localhost:8085/person/" + id, {
                    method: 'DELETE',
                    headers: { 'Content-type': 'application/json' },
                }).then(r => { console.log(r) })

            } else {
                console.log("data not deleted")
            }
            event.preventDefault();
            navigate('/Person');
            // alert("data deleted")
        }
        handleSubmit();
        return () => clearInterval(id);
    },[])



    return (
        <>
        </>
    );
} 