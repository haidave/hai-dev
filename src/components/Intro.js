import React from "react"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent } from "@styles/GlobalStyle"
import {
  IntroWrapper,
  IntroPronunciation,
  IntroTitle,
  IntroDivider,
  IntroDescription,
} from "@styles/introStyles"

const Intro = () => {
  return (
    <Section>
      <SectionTitle index={"01"} name={"Welcome"} />
      <SectionContent>
        <IntroWrapper>
          <IntroPronunciation className="swiper-no-swiping">
            <span>/haːj˧˩/ /ŋwiən˦ˀ˥/</span>
            <span>/deɪv/</span>
          </IntroPronunciation>
          <IntroTitle className="swiper-no-swiping">
            Hai Nguyen / <span>Dave</span>
          </IntroTitle>
          <IntroDivider />
          <IntroDescription className="swiper-no-swiping">
            The frontend developer based in Prague
          </IntroDescription>
        </IntroWrapper>
      </SectionContent>
    </Section>
  )
}

export default Intro
