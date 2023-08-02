import { useEffect, useState } from "react"

export function Tour() {
    const [tour, setTour] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/tours').then(res => res.json()).then(data => setTour(data))
    }, [])

    const[type,setType]=useState("");
    const[name,setName]=useState("");
    const[cost,setCost]=useState(0);
    const[duration,setDuration]=useState(0);
    
    let proddata = {
        "type": type,
        "name": name,
        "cost": cost,
        "duration": duration
    }
    const postdata=()=>{
        const post = {
            method: "POST",
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(proddata)
        }
        fetch('http://localhost:8080/api/tours', post)
            .then(res => res)
    }

    return (
        <div>
            <table>
                <tr><td>Type</td> <td><input type="text" onChange={(event)=>{setType(event.target.value)}}></input></td></tr>
                <tr><td>Name</td> <td><input type="text" onChange={(event)=>{setName(event.target.value)}}></input></td></tr>
                <tr><td>Cost</td> <td><input type="text" onChange={(event)=>{setCost(event.target.value)}}></input></td></tr>
                <tr><td>Duration</td> <td><input type="text" onChange={(event)=>{setDuration(event.target.value)}}></input></td></tr>
            </table>
            <button onClick={postdata}>Add Tour</button>

            <table border={2}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Type</td>
                        <td>Name</td>
                        <td>Cost</td>
                        <td>Duration</td>
                    </tr>
                </thead>
                {tour.map(tour => (

                    <tr key={tour.id}>
                        <td>{tour.t_id}</td>
                        <td>{tour.type}</td>
                        <td>{tour.name}</td>
                        <td>{tour.cost}</td>
                        <td>{tour.duration}</td>
                        <td> <a href={'/tour/' + tour.t_id}>display</a></td>
                            <td> <a href={'/touredit/' + tour.t_id}>Edit</a></td>
                            <td> <a href={'/tourdel/' + tour.t_id}>delete</a></td>
                    </tr>
                )

                )}
            </table>

        </div>
    )
}