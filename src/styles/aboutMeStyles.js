import styled from "styled-components"
import { motion } from "framer-motion"

export const AboutMeSection = styled(motion.div)`
  width: 100%;
  height: 300px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`

export const AboutMeText = styled(motion.div)`
  font-size: 2rem;
  font-weight: 400;
`
