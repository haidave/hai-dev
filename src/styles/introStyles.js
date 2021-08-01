import styled from "styled-components"

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const IntroTitle = styled.h1`
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-white);
  overflow: hidden;

  span {
    font-weight: 500;
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

export const IntroDescription = styled.p`
  margin-top: 1.5rem;
  font-family: var(--font-blender-pro);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-white);

  @media screen and (max-width: 370px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 900px) {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 2.5rem;
  }
`
