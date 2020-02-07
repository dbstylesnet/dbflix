import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    img {
        opacity: ${props => props.opaImg};
        position: absolute;
        width: 100%;
        top: 0px;
        left: 0;
        transition: all 1s ease-in-out;
    }   
`

export { Wrapper }

