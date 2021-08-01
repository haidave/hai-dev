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
          <IntroTitle className="intro__title">
            <strong>
              Hai Nguyen /&nbsp;<span>Dave</span>
            </strong>
          </IntroTitle>
          <Divider className="divider" />
          <IntroDescription className="intro__description">
            Frontend developer based in&nbsp;Prague
          </IntroDescription>
        </IntroSection>
      </SectionContent>
    </Section>
  )
}

export default Intro
