import React, { Component } from 'react'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import dbflixLogo from '../../images/dbflixLogo.svg'

class HeaderClass extends Component {
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

    render() {
        const { msg } = this.props
        return (
            <Wrapper>
                <div className="logo">
                    <Link to='/'>
                        <img src={dbflixLogo} alt={dbflixLogo} />
                        <p>movie library</p>
                    </Link>
                    <span>
                        <div className={`menu ${this.state.isOpen ? 'opened' : ''}`}>
                            <div className='menuTrigger' onClick={this.foldSwitch.bind(this)}>
                                <div><span></span></div>
                            </div>
                            <Link to='/about'>{msg} about us</Link>
                        </div>
                    </span>
                </div>
            </Wrapper>
        )
    };
}

export default HeaderClass
