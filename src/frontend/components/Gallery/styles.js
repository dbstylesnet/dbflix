import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 6px;
    justify-content: center;
    max-width: 80vw;
    margin: 0 10vw;

    @media only screen and (max-width: 992px) {
        flex-direction: column;
    }
`

export { Wrapper }
