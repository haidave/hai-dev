import React from "react"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, Divider } from "@styles/GlobalStyle"
import { IntroSection, IntroTitle, IntroDescription } from "@styles/introStyles"

const Intro = () => {
  return (
    <Section>
      <SectionTitle index={"01"} name={"Welcome"} />
      <SectionContent>
        <IntroSection>
          <IntroTitle animate={{ y: 0 }} initial="{{y: 100}}">
            Hai Nguyen /&nbsp;<span>Dave</span>
          </IntroTitle>
          <Divider />
          <IntroDescription>
            Frontend developer based in&nbsp;Prague
          </IntroDescription>
        </IntroSection>
      </SectionContent>
    </Section>
  )
}

export default Intro
