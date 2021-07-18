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
  font-size: 36px;
  font-weight: 600;
  color: var(--color-white);

  span {
    font-weight: 500;
  }

  @media screen and (min-width: 1280px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 92px;
  }
`

export const IntroDivider = styled(motion.div)`
  margin-top: 1rem;
  width: 10%;
  height: 6px;
  background-color: var(--color-red);
`

export const IntroDescription = styled(motion.p)`
  margin-top: 2rem;
  font-family: var(--font-blender-pro);
  font-size: 18px;
  font-weight: 500;
  color: var(--color-white);

  @media screen and (min-width: 1280px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 32px;
  }
`
