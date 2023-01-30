const axios = require('axios')

url = "http://localhost:8080/"

async function clearDatabase(url) {
    const data = await axios.get(url)
    for (i = 0; i <data.data.length; i++){ 
        const id = data.data[i]._id
        axios.delete(url + "id")
    }
    return data
}

clearDatabase(url)