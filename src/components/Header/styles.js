import styled from 'styled-components'

const Wrapper = styled.header`
    background-color: #3e275d;
    min-height: 10vh;
    font-size: calc(10px + 2vmin);
    color: white;
    margin: 0 0 60px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, .7);
    display: flex;
    justify-content: flex-start;
    p {
        font-size: 18px;
        align-self: flex-end;
        margin: 0px 0px 5px -40px;
    }
    div {
        max-width: 80vw;
        margin: 0 10vw;
        display: flex;
    }
`

export { Wrapper }
