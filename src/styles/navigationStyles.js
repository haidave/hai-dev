import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.red};
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  position: relative;
  top: 72px;

  h2 {
    color: ${props => props.theme.background};
  }
`

export const ClosedNav = styled.div`
  button {
    padding: 20px;
    transform-origin: center;
    border: none;
    outline: none;
    background: none;

    span {
      display: block;
      margin: 8px;
      width: 36px;
      height: 6px;
      background-color: ${props => props.theme.background};
    }
  }
`

export const NavList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  ul {
    padding: 0;

    li {
      height: 96px;
      line-height: 96px;
      list-style: none;
      font-size: 3rem;
      font-weight: bold;
      overflow: hidden;

      .link {
        position: relative;
        display: flex;
        align-items: center;
        color: ${props => props.theme.background};

        .arrow {
          height: 76px;
          margin-right: 8px;

          svg {
            width: 100px;
            path {
              fill: ${props => props.theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavFooter = styled.div``
