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
    text-align: left;
    .techList {
        margin: 15px auto 40px;
    }
    div {
        max-width: 80vw;
        margin: 0 10vw;
        text-indent: 30px;
        text-align: left;
    }
    ul {
        padding: 0px 0 0 23px;
        line-height: 30px;
        .cathegory {
            font-weight: bold;
        }
        .cathegorySub {
            font-style: italic;
            list-style-type: circle;
        }
        li {
            text-align: left;
        }
        ul ul ul{
            list-style-type: disclosure-closed;
        }
    }
`
export { Wrapper }