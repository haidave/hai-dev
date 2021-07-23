import styled from "styled-components"
import { motion } from "framer-motion"

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const IntroPronunciation = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  background-color: var(--color-white);
  color: var(--color-blue-dark);
  font-size: 14px;
  overflow: hidden;
  display: none;

  @media screen and (min-width: 1920px) {
    font-size: 16px;
  }
`

export const IntroTitle = styled(motion.h1)`
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-white);

  span {
    font-weight: 500;
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

export const IntroDescription = styled(motion.p)`
  margin-top: 1.5rem;
  font-family: var(--font-blender-pro);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-white);

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
