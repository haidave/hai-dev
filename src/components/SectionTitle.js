import React from "react"

// styles
import {
  SectionTitleWrapper,
  SectionTitleIndex,
  SectionTitleText,
} from "@styles/GlobalStyle"

function SectionTitle({ index, name }) {
  return (
    <SectionTitleWrapper className="swiper-no-swiping">
      <SectionTitleIndex>{index}</SectionTitleIndex>
      <SectionTitleText>{name}</SectionTitleText>
    </SectionTitleWrapper>
  )
}

export default SectionTitle
