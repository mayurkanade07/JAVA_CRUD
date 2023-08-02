import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";
export function ListEmployee() {
    // let navigate=useNavigate()
    const [pstEmp, setPstemp] = useState("Fill data")
    const [Employee, setEmployee] = useState([])
    useEffect(() => {
        fetch("http://localhost:5221/api/Employee")
            .then(res => res.json())
            .then((result) => { setEmployee(result); });
    }, [pstEmp]);

    const [id, setID] = useState(0)
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [dept, setdept] = useState("")
    let Empdata = {

        "name": name,
        "email": email,
        "department": dept
    }

    let Empdatau = {
        "id": id,
        "name": name,
        "email": email,
        "department": dept
    }


    let postdata = () => {
        const post = {
            method: "POST",
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(Empdata)
        }
        fetch('http://localhost:5221/api/Employee', post)
            .then(res => res.json())
            .then(data => { if (data) { setPstemp("Employee Added"); } })
    }
    let b = JSON.stringify(Empdatau)
    let putdata = (event) => {
        const put = {
            method: 'PUT',
            headers: { 'Content-Type': 'Application/json' },
            body: b
        }
        // event.preventDefault();
        fetch(`http://localhost:5221/api/Employee/${id}`, put).then(res => res.json()).then(data => data).catch(err => console.log(err))
    }


    let deletedata = (event) => {

        if (window.confirm("You want to delete the data") === true) {
            const del = {
                method: "DELETE",
                headers: { 'Content-Type': 'Application/json' }
            }
            fetch(`http://localhost:5221/api/Employee/${id}`, del).then(res => res.json()).then(data => data).catch(err => console.log(err))
            event.preventDefault();
        }else{
            console.log("data not deleted")
        }

    }


    return (
        <div>
            <table align="center">
                <tbody>
                    <tr>
                        <td> ID  :</td>
                        <td><input type="number" onChange={(event) => setID(event.target.value)} /></td>
                    </tr>
                    <tr>
                        <td> Name  :</td>
                        <td><input type="text" onChange={(event) => setName(event.target.value)} /></td>
                    </tr>

                    <tr>
                        <td> Email :</td>
                        <td><input type="text" onChange={(event) => setemail(event.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Department :</td>
                        <td><input type="text" onChange={(event) => setdept(event.target.value)} /></td>
                    </tr>
                    <tr> <td colSpan="2" align="center" ><button onClick={postdata}>Add Employee</button></td></tr>
                    <tr> <td colSpan="2" align="center" ><button onClick={putdata}>Edit Employee</button></td></tr>
                    <tr> <td colSpan="2" align="center" ><button onClick={deletedata}>Delete Employee</button></td></tr>
                </tbody>


            </table>
            <p align='center'>{`${pstEmp}`}</p>
            <h2 align="center">Employees Data</h2>
            <table border={5} align="center" width={800} >
                <thead bgcolor="orange" align="center" >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th colSpan={3}>CRUD</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {Employee.map(emp => (
                        <tr key={emp.id}> 
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td> <a href={'/emp/' + emp.id}>display</a></td>
                            <td> <a href={'/empedit/' + emp.id}>Edit</a></td>
                            <td> <a href={'/empdel/' + emp.id}>delete</a></td>
                        </tr>
                    ))}
                </tbody></table></div>
    );
}

