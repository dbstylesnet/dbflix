import styled from 'styled-components'

const Wrapper = styled.header`
    min-height: 10vh;
    font-size: calc(10px + 2vmin);
    color: white;
    margin: 0 0 60px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, .7);
    display: flex;
    p {
        font-size: 18px;
        align-self: flex-end;
        margin: 0px 0px 5px -40px;
    }
    div.logo {
        max-width: 80vw;
        margin: 0 10vw;
        display: flex;
        justify-content: space-between;
        width: 100%;
        a {
            display:flex;
        }
        span {
            align-self: flex-end;
            position: relative;
        }
    }
    .menu {
        button {
            color: #333;
        }
        background: lightgreen;
        width: 100px;
        height: 50px;
        transition: all .3s ease-in-out;
        box-shadow: 0px 0px 3px #333;
        position: absolute;
        float:right;
        top: 0;
        right: -19px;
        z-index: 10;
        &.opened {
            width: 150px;
            height: 100px;
            transition: all .3s ease-in-out;
        }
    }
`

export { Wrapper }
