import styled from "styled-components"
import { motion } from "framer-motion"

export const ProjectsSection = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  margin-top: 5rem;
`
