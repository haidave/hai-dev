import styled from "styled-components"
import { motion } from "framer-motion"

export const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AboutText = styled(motion.div)`
  font-family: var(--font-blender-pro);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-white);
  text-align: justify;

  & + & {
    margin-top: 1rem;
  }

  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 2rem;
  }
`
