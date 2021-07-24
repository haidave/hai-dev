import styled, { keyframes } from "styled-components"

const headerLine = keyframes`
  0% {
      transform: translateY(101vh)
    }

    100% {
      transform: translateY(-30px)
    }
`

const headerLineMobile = keyframes`
  0% {
      transform: translateX(100vw)
    }

    100% {
      transform: translateX(-30px)
    }
`

const glitchAnimationOne = keyframes`
   0% {
    clip-path: inset(0);
  }
  5% {
    clip-path: inset(0);
  }
  10% {
    clip-path: inset(0);
  }
  15% {
    clip-path: inset(0);
  }
  20% {
    clip-path: inset(0);
  }
  25% {
    clip-path: inset(0);
  }
  30% {
    clip-path: inset(0);
  }
  35% {
    clip-path: inset(0);
  }
  40% {
    clip-path: inset(22% 0 66% 0);
  }
  45% {
    clip-path: inset(99% 0 99% 0);
  }
  50% {
    clip-path: inset(33% 0 61% 0);
  }
  55% {
    clip-path: inset(38% 0 19% 0);
  }
  60% {
    clip-path: inset(15% 0 50% 0);
  }
  65% {
    clip-path: inset(86% 0 8% 0);
  }
  70% {
    clip-path: inset(60% 0 25% 0);
  }
  75% {
    clip-path: inset(0);
  }
  80% {
    clip-path: inset(0);
  }
  85% {
    clip-path: inset(0);
  }
  90% {
    clip-path: inset(0);
  }
  95% {
    clip-path: inset(0);
  }
  100% {
    clip-path: inset(0);
  }
`

const glitchAnimationTwo = keyframes`
   0% {
    clip-path: inset(0);
  }
  5% {
    clip-path: inset(0);
  }
  10% {
    clip-path: inset(0);
  }
  15% {
    clip-path: inset(0);
  }
  20% {
    clip-path: inset(0);
  }
  25% {
    clip-path: inset(0);
  }
  30% {
    clip-path: inset(0);
  }
  35% {
    clip-path: inset(0);
  }
  40% {
    clip-path: inset(33% 0 33% 0);
  }
  45% {
    clip-path: inset(1% 0 1% 0);
  }
  50% {
    clip-path: inset(69% 0 26% 0);
  }
  55% {
    clip-path: inset(96% 0 2% 0);
  }
  60% {
    clip-path: inset(71% 0 15% 0);
  }
  65% {
    clip-path: inset(98% 0 1% 0);
  }
  70% {
    clip-path: inset(48% 0 39% 0);
  }
  75% {
    clip-path: inset(0);
  }
  80% {
    clip-path: inset(0);
  }
  85% {
    clip-path: inset(0);
  }
  90% {
    clip-path: inset(0);
  }
  95% {
    clip-path: inset(0);
  }
  100% {
    clip-path: inset(0);
  }
`

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-right: 25px;
  padding-left: 25px;
  width: calc(100% - 50px);
  height: 3.5rem;
  background-color: var(--color-background);
  z-index: 200;
  border-bottom: 1px solid var(--color-blue-dark);

  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: 20px;
    height: 1px;
    background-color: #ffffff;
    animation: 5s cubic-bezier(0.4, 0.25, 0, 1) infinite forwards
      ${headerLineMobile};
  }

  @media screen and (min-width: 768px) {
    padding-right: 0;
    padding-left: 0;
    width: 100px;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: none;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: -1px;
      bottom: auto;
      left: auto;
      width: 1px;
      height: 20px;
      background-color: #ffffff;
      animation: 5s cubic-bezier(0.4, 0.25, 0, 1) infinite forwards
        ${headerLine};
    }
  }
`

export const HeaderLogo = styled.div`
  a {
    display: block;
    position: relative;
    color: var(--color-white);
    font-size: 2.5rem;
    font-weight: 500;
    transition: color 0.25s ease-in;
    will-change: color;

    &:hover::before,
    &:hover::after,
    &:hover {
      color: var(--color-red);
    }

    &::before,
    &::after {
      content: "H";
      position: absolute;
      top: 0;
      left: 1px;
      width: 100%;
      height: 100%;
      background-color: transparent;
      color: #ffffff;
      overflow: hidden;
      transition: color 0.25s ease-in;
      will-change: color;
    }

    &::before {
      left: 1px;
      text-shadow: 1px 0 #0e0520;
      animation: 5s linear infinite forwards ${glitchAnimationOne};
    }

    &::after {
      text-shadow: -1px 0 #0e0520;
      animation: 5s linear infinite forwards ${glitchAnimationTwo};
    }

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`
