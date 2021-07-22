import styled from "styled-components"

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const ContactTitle = styled.h2`
  color: var(--color-white);
  font-size: 36px;

  span {
    color: var(--color-red);
    font-weight: 600;
  }

  @media screen and (min-width: 1280px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 92px;
  }
`

export const ContactButtons = styled.div`
  display: flex;
`
