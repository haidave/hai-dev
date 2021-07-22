import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const HomeProjectsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  height: 65%;
`

export const HomeProjectsGrid = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 770px));
  gap: 1rem;
  height: 100%;

  ${props =>
    props.projectPage &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      @media screen and (min-width: 1920px) {
        grid-template-columns: repeat(4, minmax(250px, 1fr));
      }
    `}
`

export const HomeProjectLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  opacity: 0;
  z-index: 50;
  transition: opacity 0.5s cubic-bezier(0.4, 0.25, 0, 1);
  transition: background-color 0.25s ease-out, color 0.25s ease-out,
    border-color 0.25s ease-out;
  will-change: background-color, color, border-color;

  &:hover {
    background-color: var(--color-red);
    border-color: var(--color-red);
  }
`

export const HomeProjectInfo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.75rem;
  background-color: white;
  transform: translateY(100%);
  transform-origin: bottom;
  transition: transform 0.5s cubic-bezier(0.4, 0.25, 0, 1);
`

export const HomeProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0.25, 0, 1);

  .project__image {
    height: 100%;

    img {
      object-position: top center;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-blue-dark);
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.4, 0.25, 0, 1);
  }
`

export const HomeProjectInfoText = styled.p`
  font-family: var(--font-blender-pro);
  font-size: 1.25rem;
  font-weight: 500;

  span {
    position: relative;
    display: flex;
    padding-left: 1rem;
    font-family: var(--font-arame);
    font-size: 1rem;
    font-weight: 600;

    &::before {
      content: "▸";
      position: absolute;
      left: 0px;
      vertical-align: middle;
    }
  }

  & + & {
    margin-top: 0.5rem;
  }
`
export const HomeProjectsGridItem = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: 75%;
  }

  &:hover ${HomeProjectInfo} {
    transform: translateY(0);
  }

  &:hover ${HomeProjectLink} {
    opacity: 1;
  }

  &:hover ${HomeProjectImage} {
    transform: scale(1.1);
  }

  &:hover ${HomeProjectImage}::after {
    opacity: 0.9;
  }
`
export const HomeProjectsButton = styled.div`
  position: relative;
  z-index: 100;
`
