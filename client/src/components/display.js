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
        {data.map(data => 
            (<li key={data.name}>{data.name + " " + data.datetime}</li>))}
        </div>
    </div>
)}