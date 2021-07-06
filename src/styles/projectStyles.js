import styled from "styled-components"
// import { motion } from "framer-motion"

export const ProjectWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  & + & {
    margin-top: 6rem;
    text-align: left;
  }

  &:nth-of-type(2n + 1) {
    .project__content {
      grid-column: 7 / -1;
      text-align: right;
    }

    .project__image-wrapper {
      grid-column: 1 / 8;
    }

    .project__stack,
    .project__link {
      justify-content: flex-end;
    }
  }
`

export const ProjectContent = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;

  border-radius: 5px;
  z-index: 2;
`

export const ProjectImage = styled.div`
  grid-area: 1 / 6 / -1 / -1;
  position: relative;

  .project__image {
    position: relative;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    overflow: hidden;

    img {
      bottom: 0;
      height: 100%;
      left: 0;
      margin: 0;
      max-width: none;
      padding: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }
  }
`

export const ProjectTitle = styled.h3`
  font-size: clamp(24px, 5vw, 28px);
`

export const ProjectDescription = styled.div`
  position: relative;
  padding: 20px 25px;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.background};
`

export const ProjectStack = styled.ul`
  display: flex;
  padding: 0;
  font-style: italic;
  list-style: none;

  li {
    padding: 5px;
  }
`

export const ProjectLink = styled.div`
  display: flex;
`
