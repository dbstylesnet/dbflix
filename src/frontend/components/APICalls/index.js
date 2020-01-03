import React from 'react'
const axios = require('axios')

async function APICalls() {
    try {
        return await axios('/rest/movies');
        // console.log(wes.data);
    } 
    catch (e) {
     console.error(e)
    } 
}

export default APICalls