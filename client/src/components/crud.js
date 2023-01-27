import Axios from 'axios';
import React, {useState} from 'react'
import Display from './display';

export default function Crud() {

    const [ queriedJSON, setQueriedJSON ] = useState({name: '', datetime: ''})

    
    const submitFind = async (e) => {
        e.preventDefault();
        const jsonName = e.target.name.value;
        await Axios.get("http://localhost:8080/jsons/"+jsonName)
        .then( res => setQueriedJSON(res.data))
    }

    const submitCreate = async (e) => {
        e.preventDefault();
        const jsonName = e.target.name.value;
        const database = await Axios.get(e.target.url.value)
        await Axios.post("http://localhost:8080/jsons/", {
        name: jsonName,
        database: database
        })
        window.location.replace("http://localhost:3000/")
    }

    const submitDelete = async (e) => {
        e.preventDefault();
        const jsonName = e.target.name.value;
        await Axios.delete("http://localhost:8080/jsons/"+jsonName)
        window.location.replace("http://localhost:3000/")
    }

    return (
        <div>
            <div className = "title">Add/Remove/Display JSON</div>
            <form className ="formbox" onSubmit={submitCreate}>
                <input
                    name = "name"
                    required
                    placeholder='JSON NAME'
                ></input>
                <br></br>
                <input
                    name = "url"
                    required
                    placeholder='JSON URL'
                ></input>
                <br></br>
                <button>Add</button>       
            </form>
            <form className ="formbox" onSubmit={submitDelete}>
                <input
                    name = "name"
                    required
                    placeholder='JSON NAME'
                ></input>
                <br></br>
                <button>Remove</button>            
            </form>
            <form className ="formbox" onSubmit = {submitFind}>
                <input 
                    name = "name" 
                    placeholder='JSON NAME'
                    required
                ></input>
                <br></br>
                <button>Display</button>
            </form>
            <Display/>
            <div className = "queriedJSON">
                <div className='title'>Queried JSON Info</div>
                <div className='formbox'>
                <div key={queriedJSON.name}>{queriedJSON.name + " " + queriedJSON.datetime}</div>
                <a href ={("http://localhost:8080/jsons/"+queriedJSON.name)}>LINK</a></div>
            </div>
        </div>
    )}