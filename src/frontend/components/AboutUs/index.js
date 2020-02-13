import React from 'react'
import { Wrapper } from './styles'

const AboutUs = () => {
    return (
        <Wrapper>
            <div>
                Hi there,<br />
                This is showcase project to aim easy, simple and well structured, accessible on every device video movie library.
                Solutions used:
                <ul className='techList'>
                    <li><span className='cathegory'>JS:</span>
                        <ul>
                            <li>React:
                                <ul>
                                    <li><span className='cathegorySub'>Hooks</span>
                                        <ul>
                                            <li>useState</li>
                                            <li>useParams</li>
                                        </ul>
                                    </li>
                                </ul></li>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                        </ul>
                    </li>
                    <li><span className='cathegory'>CSS:</span>
                        <ul>
                            <li>Grid</li>
                            <li>Flexbox</li>
                        </ul>
                    </li>
                    <li>Heroku</li>
                </ul>
            </div> 
        </Wrapper>
    );
}

export default AboutUs
