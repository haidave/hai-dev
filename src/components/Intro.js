import React from "react"

// styles
import { IntroWrapper, IntroTitle } from "../styles/introStyles"
import { Flex, TextAnimation } from "../styles/globalStyles"

const Intro = () => {
  return (
    <IntroWrapper>
      <Flex centered fullWidthHeight>
        <IntroTitle>
          <TextAnimation>
            <span>the frontend developer</span>
          </TextAnimation>
        </IntroTitle>
      </Flex>
    </IntroWrapper>
  )
}

export default Intro
