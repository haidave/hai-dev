import React from "react"

// styled components
import {
  FooterWrapper,
  FooterContent,
  FooterColumn,
  FooterText,
} from "@styles/footerStyles"

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColumn className="swiper-no-swiping">
          <FooterText>Available for new opportunities</FooterText>
        </FooterColumn>
        <FooterColumn className="swiper-no-swiping">
          <FooterText gray>Say hello</FooterText>
          <FooterText divider>
            <a href="mailto:hello@hai.dev">hello@hai.dev</a>
          </FooterText>
        </FooterColumn>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
