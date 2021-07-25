import React from "react"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, Divider, Button } from "@styles/GlobalStyle"
import {
  ContactSection,
  ContactTitle,
  ContactButtons,
} from "@styles/HomeContactStyles"

const HomeContact = () => {
  return (
    <Section>
      <SectionTitle index={"04"} name={"Get in touch"} />
      <SectionContent>
        <ContactSection>
          <ContactTitle>
            <span>Interested?</span>
          </ContactTitle>
          <ContactTitle>Let's get in&nbsp;touch!</ContactTitle>
          <Divider />
          <ContactButtons>
            <Button
              href="https://www.linkedin.com/in/iamhai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button href="mailto:hello@hai.dev" secondary>
              Say Hello
            </Button>
          </ContactButtons>
        </ContactSection>
      </SectionContent>
    </Section>
  )
}

export default HomeContact
