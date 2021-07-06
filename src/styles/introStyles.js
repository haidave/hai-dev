import styled from "styled-components"

export const IntroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`

export const IntroTitle = styled.div`
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
`
