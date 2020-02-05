import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 6px;
    max-width: 80vw;
    margin: 20px 10vw 0;

    @media only screen and (max-width: 992px) {
        flex-direction: column;
    }
`


const ImgBG = styled.img`

`

export { Wrapper, ImgBG }
