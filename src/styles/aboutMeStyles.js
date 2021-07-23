import styled from "styled-components"
import { motion } from "framer-motion"

export const AboutMeSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
`

export const AboutMeText = styled(motion.div)`
  font-family: var(--font-blender-pro);
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-white);

  & + & {
    margin-top: 1.5rem;
  }

  strong {
    color: var(--color-red);
    font-weight: 700;
  }

  a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 2rem;

    & + & {
      margin-top: 2rem;
    }
  }
`

export const AboutMeStack = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px));
  gap: 0.5rem 2rem;
  margin-top: 1rem;
  padding: 0px;
  overflow: hidden;
  list-style: none;
  font-family: var(--font-arame);
  font-size: 1.25rem;
  color: var(--color-white);
  font-weight: 600;
  text-align: left;

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(3, minmax(140px, 280px));
    margin-top: 2rem;
    gap: 1rem 2rem;
  }

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    margin-right: 2rem;

    &::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: var(--color-white);
    }
  }

  p {
    font-family: var(--font-blender-pro);
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
  }
`
