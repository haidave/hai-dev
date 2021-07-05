import styled, { css, keyframes } from "styled-components"

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      margin: 0;
      padding: 0;
      max-width: 100%;
    `}
`
export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.centered &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

    ${props =>
    props.alignTop &&
    css`
      align-items: top;
    `}

    ${props =>
    props.fullWidthHeight &&
    css`
      width: 100%;
      height: 100%;
    `}

    ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${props => props.theme.red};
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.red};
  }

  &.pointer {
    border: 4px solid ${props => props.theme.text};
  }

  &.nav-open {
    background: ${props => props.theme.text};
  }
`

const showText = () =>
  keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `

const animateTextWithCursor = keyframes`
  0% {
    left: 0;
    width: 0;
  }

  50% {
    left: 0;
    width: 100%;
  }

  100% {
    left: 102%;
    width: 1%;
  }
`

const animateText = keyframes`
  0% {
    left: 0;
    width: 0;
  }

  50% {
    left: 0;
    width: 100%;
  }

  100% {
    left: 100%;
    width: 0%;
  }
`

const blink = keyframes`
  50% {
      background-color: transparent;
    }
`

export const TextAnimation = styled.span`
  position: relative;
  display: inline-block;

  span {
    opacity: 0;
    animation: 0.0001s linear 0.5s 1 normal forwards running ${showText};
  }

  &::after {
    content: "";
    position: absolute;
    top: 10%; // to be visually centered
    left: 0;
    bottom: 0;
    width: 0%;
    height: 100%;
    background-color: ${props => props.theme.text};
    animation: 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal forwards running
      ${animateText};

    ${props =>
      props.cursorAnimation &&
      css`
        animation: 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal forwards
            running ${animateTextWithCursor},
          ${blink} 0.5s steps(1) infinite 1.25s alternate;
      `}
  }
`
