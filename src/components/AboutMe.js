import React from "react"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent } from "@styles/GlobalStyle"
import { IntroDescription } from "@styles/introStyles"

const AboutMe = () => {
  return (
    <Section>
      <SectionTitle index={"02"} name={"About me"} />
      <SectionContent>
        <IntroDescription>About me</IntroDescription>
      </SectionContent>
    </Section>
  )
}

export default AboutMe
