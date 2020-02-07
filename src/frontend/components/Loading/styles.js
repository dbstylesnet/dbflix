import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
    display: flex;
    justify-content: center;
    min-height: 700px;
    div {
        border: 16px solid #fff;
        border-top: 16px solid #49aa48;
        align-self: center;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      }
      
`

export { Wrapper }