import styled from "styled-components"

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const ContactTitle = styled.h2`
  color: var(--color-white);
  font-size: 2.5rem;

  span {
    color: var(--color-red);
    font-weight: 600;
  }

  @media screen and (max-width: 370px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 6rem;
  }
`

export const ContactButtons = styled.div`
  display: flex;
`
