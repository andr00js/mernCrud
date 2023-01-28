import Axios from 'axios';
import Display from './display';

export default function Crud() {

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
            <Display/> 
            <div className = "title">Add/Remove JSON</div>
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
            </div>
    )}