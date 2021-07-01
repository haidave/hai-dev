import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 99;
`

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }

  span {
    display: inline-block;
    height: 1rem;
    width: 1rem;
    background-color: ${props => props.theme.red};
    margin-left: 5px;
    border-radius: 100%;
  }
`
export const Menu = styled.div`
  button {
    padding: 20px;
    transform-origin: center;
    border: none;
    outline: none;
    background: none;
  }

  span {
    display: block;
    margin: 8px;
    width: 36px;
    height: 6px;
    background-color: ${props => props.theme.text};
  }
`
