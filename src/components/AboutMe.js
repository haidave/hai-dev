import React from "react"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, Button } from "@styles/GlobalStyle"
import {
  AboutMeSection,
  AboutMeText,
  AboutMeStack,
} from "@styles/aboutMeStyles"

const AboutMe = () => {
  return (
    <Section>
      <SectionTitle index={"02"} name={"About me"} />
      <SectionContent>
        <AboutMeSection className="swiper-no-swiping">
          <AboutMeText>
            Hey, my name is Hai Nguyen but you can call me <strong>Dave</strong>
            . I'm 25 years old and I live in Prague.
          </AboutMeText>
          <AboutMeText>
            I'm currently working at Isobar Czech Republic and I'm{" "}
            <strong>in charge of campaign assets</strong> such as dynamic
            banners and newsletters. I also build websites in{" "}
            <strong>Vue/Nuxt</strong>. After work I have been{" "}
            <strong>learning React</strong> to further my skills. For example I
            built this portfolio in <strong>Gatsby</strong>.
          </AboutMeText>
          <AboutMeText>
            <strong>Right now I'm looking for a new job!</strong>
          </AboutMeText>
          <AboutMeText>
            Here are a few technologies and tools I've been working with
            recently:
            <AboutMeStack>
              <li>React, Gatsby, Next*</li>
              <li>Vue, Nuxt</li>
              <li>BEM, SCSS, Styled&nbsp;Components</li>
              <li>GSAP, Framer&nbsp;Motion</li>
              <li>Git, Bitbucket, Github</li>
              <li>Photoshop, Sketch, Figma</li>
              <p>*still learning</p>
            </AboutMeStack>
          </AboutMeText>
          <Button to="/about">More about me</Button>
        </AboutMeSection>
      </SectionContent>
    </Section>
  )
}

export default AboutMe
