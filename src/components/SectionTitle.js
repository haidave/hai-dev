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
      <SectionTitleIndex className="section__title-index">
        {index}
      </SectionTitleIndex>
      <SectionTitleText className="section__title-text">
        {name}
      </SectionTitleText>
    </SectionTitleWrapper>
  )
}

export default SectionTitle
