const axios = require('axios')

async function APICalls() {
    try {
        return await axios('/rest/movies');
    } catch (e) {
        console.error(e)
    } 
}

export default APICalls
