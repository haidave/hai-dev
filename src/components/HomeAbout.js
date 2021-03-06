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

const HomeAbout = () => {
  return (
    <Section>
      <SectionTitle index={"02"} name={"About me"} />
      <SectionContent>
        <AboutMeSection>
          <div className="about__text">
            <AboutMeText>
              Hey, my name is Hai Nguyen, but you can call me{" "}
              <strong>Dave</strong>. I'm 25&nbsp;years old and I&nbsp;live
              in&nbsp;Prague.
            </AboutMeText>
            <AboutMeText>
              Currently I'm working at <strong>Isobar Czech Republic</strong>{" "}
              where I'm <strong>in charge of campaign assets</strong> such as{" "}
              <a
                href="https://mam.cz/zpravy/2021-05/metrozoom-vytvoril-pro-sazkabet-prvni-dynamickou-ooh-reklamu-v-cesku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                dynamic banners
              </a>{" "}
              or newsletters and I&nbsp;also build websites in{" "}
              <strong>Vue/Nuxt</strong>. After work I&nbsp;have been learning{" "}
              <strong>React</strong> to further my skills. As an example of
              that, I&nbsp;built this portfolio in&nbsp;<strong>Gatsby</strong>.
            </AboutMeText>
            <AboutMeText>
              <strong>Right now I'm looking for a&nbsp;new challenge!</strong>
            </AboutMeText>

            <AboutMeText>
              Here are a&nbsp;few technologies and tools I've been working with
              recently:
              <AboutMeStack>
                <li>React, Gatsby, Next*</li>
                <li>Vue, Nuxt</li>
                <li>BEM, SCSS, Styled&nbsp;Components</li>
                <li>GSAP, Framer&nbsp;Motion</li>
                <li>Git, Netlify, Jira</li>
                <li>Photoshop, Sketch, Figma</li>
                <p>*still learning</p>
              </AboutMeStack>
            </AboutMeText>
          </div>
          <div className="button">
            <Button href="/about">More about me</Button>
          </div>
        </AboutMeSection>
      </SectionContent>
    </Section>
  )
}

export default HomeAbout
