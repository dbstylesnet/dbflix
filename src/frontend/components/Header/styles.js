import styled from 'styled-components'

const Wrapper = styled.header`
    min-height: 10vh;
    font-size: calc(10px + 2vmin);
    color: white;
    margin: 0 0 0px;
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
            justify-content: center;
            margin: 0 0 0 -5px
        }
        span {
            align-self: flex-en4d;
            position: relative;
        }
    }
    .menu {
        .menuTrigger {
            color: #333;
            div {
                width: 60px;
                height: 13px;
                margin: 5px auto;
                cursor: pointer;
                span {
                    height: 1px;
                    background: white;
                    display: block;
                    position: relative;
                    top: 4px;
                    &:after, &:before {
                        height: 1px;
                        background: white;
                        display: block;
                        position: absolute;
                        bottom: 4px;
                        left: 0;
                        width: 60px;
                        content: '';
                    }
                    &:before {
                        bottom: -4px;
                    }
                }
            }
        }
        // background: lightgreen;
        width: 100px;
        height: 20px;
        transition: all .3s ease-in-out;
        // box-shadow: 0px 0px 3px #333;
        position: absolute;
        float:right;
        bottom: 3px;
        right: -19px;
        z-index: 10;
        overflow: hidden;
        &.opened {
            height: 50px;
            transition: all .3s ease-in-out;
        }
    }
`

export { Wrapper }
