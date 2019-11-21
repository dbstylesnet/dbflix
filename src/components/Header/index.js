import React, { Component } from 'react'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import dbflixLogo from '../../images/dbflixLogo.svg'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            folded: 'folded',
        }
    }

    foldSwitch() {
        this.setState({
            isOpen: !this.state.isOpen,
            folded: this.state.isOpen ? 'folded' : 'unfolded',
        });
    }

    // foldSwitch() {
    //     this.state.isOpen ?
    //     this.setState({
    //         isOpen: true,
    //         folded: 'unfolded',
    //     }) :
    //     this.setState({
    //         isOpen: false,
    //         folded: 'unfolded',
    //     }) 
    // }

    render() {
        const { msg } = this.props
        return (
            <Wrapper className="App-header">
                <div className="logo">
                    <Link to='/'>
                        <img src={dbflixLogo} alt={dbflixLogo} />
                        <p>handy movie library</p>
                    </Link>
                    <span>
                        <div className={`menu ${this.state.isOpen ? 'opened' : ''}`}>
                            <div className='menuTrigger' onClick={this.foldSwitch.bind(this)}>
                                <div><span></span></div>
                            </div>
                            <Link to='/about'>about us</Link>
                        </div>
                    </span>
                </div>
            </Wrapper>
        )
    };
}

// const Header = () => {
//     return(
        // <Wrapper className="App-header">
        //     <div className="logo">
        //         <Link to='/'>
        //             <img src={dbflixLogo} alt={dbflixLogo} />
        //             <p>handy movie library</p>
        //         </Link>
        //         <span>
        //             <Link to='/about'>about us</Link>
        //         </span>
        //     </div>
        // </Wrapper>
//     )
// }

export default Header
