import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Display() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios
        .get("http://localhost:8080/jsons/")
        .then(response => {
        setData(response.data)
    })
    }, []);

    return (
    <div>
        <div className='title'>JSONS in Database</div>
        <div className='formbox'>
        <table>
            <thead>
                <th scope ="col">Name</th>
                <th scope ="col">Date Added</th>
            </thead>
            <tbody>
            {data.map(data => 
                <tr className='row'>
                    <td><a href={"http://localhost:8080/jsons/" + data.name}>{data.name}</a></td>
                    <td>{data.datetime}</td>
                </tr>)}
            </tbody>
        </table>
        </div>
    </div>
)}