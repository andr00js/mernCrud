import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DisplayDatabase () { 
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios
        .get("http://localhost:8080/")
        .then(response => {
        console.log(response.data[0].data.value)
        setData(response.data.reverse())
    })});

    return (
    <div>
        <div className='title'>Compare JSONS</div>
        <table className = 'jsonTable'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {data.map(data =>
                <tr>
                    <td><a href={"http://localhost:8080/" + data._id}>{data.datetime}</a></td>
                    <td>{data.data.value}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
)}