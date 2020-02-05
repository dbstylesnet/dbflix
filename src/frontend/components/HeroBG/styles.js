import React from 'react'
import styled from 'styled-components'

const Wrapper = styled(({ opaImg, ...props }) => <div {...props} />)`
    position: relative;
    z-index: 0;
    img {
        opacity: 0;
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
            opacity: ${props => props.opaImg};
            top: -150px;
        }
        to { 
            opacity: ${props => props.opaImg};
            top: 0px; 
        }
      }
    
`

export { Wrapper }

