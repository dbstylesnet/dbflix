import React, { Component } from 'react'
import { Wrapper } from './styles'
import Counter from '../../components/Counter'

class Details extends Component {
    constructor() {
        super();
        this.state = {
            welcomeMessage: 'Hello, this will be the details page for each Movie & TV show :)',
            points: 0,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMessage: 'Coming soon! :)',
                points: this.state.points + 1000,

            })
        }, 3000);
    }

    runOnClick() {
        this.setState({
            welcomeMessage: 'Pressed Up',
            points: this.state.points + 1,
        })
    } 

    runLowClick() {
        this.setState({
            welcomeMessage: 'Pressed Down',
            points: this.state.points - 1,
        })
    } 


    render() {
        return(
            <Wrapper>
                <div>
                    Details of the movie:<br />
                    {this.state.welcomeMessage}<br />
                    <div> here goes points {this.state.points} </div>
                    <button onClick={() => this.runOnClick()}>Button here</button><br />
                    <button onClick={() => this.runLowClick()}>Button low </button><br />
                    Description goes here. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <Counter msg={'Hello'} />
                </div> 
            </Wrapper>
        )
    }
}

export default Details
