import React from "react"

// styled components
import { FooterWrapper, FooterColumn, FooterText } from "@styles/footerStyles"

function Footer() {
  return (
    <FooterWrapper>
      <FooterColumn className="swiper-no-swiping">
        <FooterText>Available for new opportunity</FooterText>
      </FooterColumn>
      <FooterColumn className="swiper-no-swiping">
        <FooterText gray>Say hello</FooterText>
        <FooterText divider>
          <a href="mailto:hello@hai.dev">hello@hai.dev</a>
        </FooterText>
      </FooterColumn>
    </FooterWrapper>
  )
}

export default Footer
