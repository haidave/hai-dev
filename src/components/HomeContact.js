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
          <div className="contact__title">
            <strong>
              <ContactTitle>
                <span>Interested?</span>
              </ContactTitle>
              <ContactTitle>Let's get in&nbsp;touch!</ContactTitle>
            </strong>
          </div>
          <Divider className="divider" />
          <ContactButtons>
            <div className="contact__button contact__button--linkedin">
              <Button
                href="https://www.linkedin.com/in/iamhai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>

            <div className="contact__button contact__button--resume">
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                secondary
              >
                Resume
              </Button>
            </div>
          </ContactButtons>
        </ContactSection>
      </SectionContent>
    </Section>
  )
}

export default HomeContact
