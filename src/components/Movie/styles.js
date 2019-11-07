import styled from 'styled-components'

const Figure = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    margin: 60px 30px 0;
    align-items: flex-start;
    &:hover {
        cursor: pointer;  
    }
    &:hover label {
        background: rgba(0, 0, 0, .7);  
        cursor: pointer;  
        transition: background 300ms ease-in-out;
    }
    &:active label {
        background: rgba(0, 0, 0, .9);  
        transition: background 300ms ease-in-out;
    } 

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
        transition: background 300ms ease-in-out;
        font-family: tahoma;
        font-size: 20px;
    }

    img {
        max-width: 100%;
        height: 100%;
        width: 400px;
    }

    @media only screen and (max-width: 992px) {
        justify-content: center;
        label {
            max-width: 400px;
        }
    }
`

export { Figure }
