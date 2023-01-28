import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CompareJSONS () { 
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios
        .get("http://localhost:8080/")
        .then(response => {
        setData(response.data)
    })
    }, []);

    return (
    <div>
        <div className='title'>Compare JSONS</div>
        <table className = 'jsonTable'>
            <thead>
                <tr>
                <th>Name</th>
                <th>Shared JSON Key 1</th>
                <th>Shared JSON Key 2</th>
                <th>Shared JSON Key 3</th>
                <th>Shared JSON Key 4</th>
                </tr>
            </thead>
            <tbody>
            {data.map(data =>
                <tr>
                    <td><a href={"http://localhost:8080/" + data.name}>{data.name}</a></td>
                    <td>{data.database.data.stone}</td>
                    <td>{data.database.data.wood}</td>
                    <td>{data.database.data.iron}</td>
                    <td>{data.database.data.gold}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
)}