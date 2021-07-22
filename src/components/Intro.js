import React from "react"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, Divider } from "@styles/GlobalStyle"
import {
  IntroSection,
  IntroPronunciation,
  IntroTitle,
  IntroDescription,
} from "@styles/introStyles"

const Intro = () => {
  return (
    <Section>
      <SectionTitle index={"01"} name={"Welcome"} />
      <SectionContent>
        <IntroSection className="swiper-no-swiping">
          <IntroPronunciation>
            <span>/haːj˧˩/ /ŋwiən˦ˀ˥/</span>
            <span>/deɪv/</span>
          </IntroPronunciation>
          <IntroTitle animate={{ y: 0 }} initial="{{y: 100}}">
            Hai Nguyen / <span>Dave</span>
          </IntroTitle>
          <Divider />
          <IntroDescription>
            The frontend developer based in Prague
          </IntroDescription>
        </IntroSection>
      </SectionContent>
    </Section>
  )
}

export default Intro
