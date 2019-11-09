import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    justify-content: center;
    max-width: 80vw;
    margin: 0 10vw;
    // max-height: 80vh;

    @media only screen and (max-width: 992px) {
        flex-direction: column;
    }
`

export { Wrapper }
