import styled from 'styled-components'

const Figure = styled.div`
    height: 40vh;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-start;

    label {
        position: absolute;
        width: 100%;
        height: 20%;
        background: rgba(0, 0, 0, .5);
        color: white;
        display: flex;
        align-self: flex-end;
        justify-content: center;
        align-items: center;
    }

    img {
        max-width: 100%;
        height: auto;
        width: 400px;
    }
`

export { Figure }
