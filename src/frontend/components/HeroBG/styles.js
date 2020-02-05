import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    img {
        opacity: 0.3;
        position: absolute;
        width: 100%;
        top: 0px;
        left: 0;
        animation-name: example;
        animation-duration: 5s;  
        animation-delay: 1s;
        animation-fill-mode: both;
        animation-direction: forward;
    }

    @keyframes example {
        from {
            opacity: 0;
            top: -150px;
        }
        to { 
            opacity: 0.3;
            top: 0px; 
        }
      }
    
`

export { Wrapper }

