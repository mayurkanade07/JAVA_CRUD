import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export function Person() {
    const [person, setPerson] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    let navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:8085/person').then(res => res.json()).then(data => setPerson(data))
    }, []);

    let persondata = {
        "firstname": firstname,
        "lastname": lastname
    }
    const postdata = () => {
        const post = {
            method: "POST",
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(persondata)
        }
        fetch('http://localhost:8085/person', post)
            .then(res => res)
        navigate('/Person');
    }


    return (
        <div>
            <table>
                <tr><td>First Name</td> <td><input type="text" onChange={(event) => { setFirstname(event.target.value) }}></input></td></tr>
                <tr><td>Last Name</td> <td><input type="text" onChange={(event) => { setLastname(event.target.value) }}></input></td></tr>
            </table>
            <button onClick={postdata}>Add Person</button>
            <table border={2} >
                <thead border={2} style={{textAlign:"center" ,backgroundColor:"orange"}}>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td colSpan={3}>CRUD</td>
                </thead>
                {person.map((per) =>
                    <tr>
                        <td>{per._id}</td>
                        <td>{per.firstname}</td>
                        <td>{per.lastname}</td>
                        <td> <a href={'/person/' + per._id}>display</a></td>
                        <td> <a href={'/personedit/' + per._id}>Edit</a></td>
                        <td> <a href={'/persondel/' + per._id}>delete</a></td>
                    </tr>
                )}

            </table>
        </div>
    )
}