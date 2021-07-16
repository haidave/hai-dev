import React from "react"

// styles
import {
  SectionTitleWrapper,
  SectionTitleIndex,
  SectionTitleText,
} from "@styles/GlobalStyle"

function SectionTitle({ index, name }) {
  return (
    <SectionTitleWrapper>
      <SectionTitleIndex className="swiper-no-swiping">
        {index}
      </SectionTitleIndex>
      <SectionTitleText className="swiper-no-swiping">{name}</SectionTitleText>
    </SectionTitleWrapper>
  )
}

export default SectionTitle
