import React from 'react'
import { Wrapper } from './styles'

const AboutUs = () => {
    return (
        <Wrapper>
            <div>
                <p>
                    dbFlix is a full‑stack movie library demo. The frontend is built with React and talks to a Node/Express backend API.
                    In development, the React dev server proxies API requests (like <span className='cathegory'>/rest/movies</span>) to the backend.
                    The backend is designed to load movie data from a MongoDB database (collection: <span className='cathegory'>movies</span>).
                </p>
                <p>
                    It’s built with <strong>React</strong> on the frontend, a <strong>Node.js</strong>/<strong>Express</strong> API on the backend, and a <strong>MongoDB</strong> database for movie data. Styling is done with <strong>styled-components</strong>, plus modern layout techniques (Grid/Flexbox). It’s designed to be responsive and work well across devices, and is ready to deploy on platforms like <strong>Heroku</strong>.
                </p>
            </div> 
        </Wrapper>
    )
}

export default AboutUs
