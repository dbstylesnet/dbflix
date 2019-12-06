import styled from 'styled-components'

const Wrapper = styled.div`
    align-items: center;
    color: white;
    font-size: 18px;
    margin: 60px 0 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 25vh;
    &.wrapper {
        max-width: 80vw;
        margin: 0 10vw;
        text-align: left;
    }
    div.detailsContainer {
        display: flex;
        div {
            margin: 0 10px;
            flex: 1;
            img {
                width: auto;
                max-width: 100%;
                height: auto;
            }
        }
    }
    @media only screen and (max-width: 400px) {
        div.detailsContainer {
            display: flex;
            flex-direction: column;
            div {
                flex: 1;
            }
        }
    }
`

export { Wrapper }