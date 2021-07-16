import { css } from "styled-components"

import ArameWoff from "@fonts/Arame/Arame.woff"
import ArameWoff2 from "@fonts/Arame/Arame.woff2"
import ArameThinWoff from "@fonts/Arame/Arame-Thin.woff"
import ArameThinWoff2 from "@fonts/Arame/Arame-Thin.woff2"
import ArameBoldWoff from "@fonts/Arame/Arame-Bold.woff"
import ArameBoldWoff2 from "@fonts/Arame/Arame-Bold.woff2"
import ArameStencilWoff from "@fonts/Arame/Arame-Stencil.woff"
import ArameStencilWoff2 from "@fonts/Arame/Arame-Stencil.woff2"

import BlenderProThinWoff from "@fonts/BlenderPro/BlenderPro-Thin.woff"
import BlenderProThinWoff2 from "@fonts/BlenderPro/BlenderPro-Thin.woff2"
import BlenderProBookWoff from "@fonts/BlenderPro/BlenderPro-Book.woff"
import BlenderProBookWoff2 from "@fonts/BlenderPro/BlenderPro-Book.woff2"
import BlenderProMediumWoff from "@fonts/BlenderPro/BlenderPro-Medium.woff"
import BlenderProMediumWoff2 from "@fonts/BlenderPro/BlenderPro-Medium.woff2"
import BlenderProBoldWoff from "@fonts/BlenderPro/BlenderPro-Bold.woff"
import BlenderProBoldWoff2 from "@fonts/BlenderPro/BlenderPro-Bold.woff2"
import BlenderProHeavyWoff from "@fonts/BlenderPro/BlenderPro-Heavy.woff"
import BlenderProHeavyWoff2 from "@fonts/BlenderPro/BlenderPro-Heavy.woff2"

const arameWeights = {
  300: [ArameThinWoff, ArameThinWoff2],
  400: [ArameWoff, ArameWoff2],
  500: [ArameStencilWoff, ArameStencilWoff2],
  700: [ArameBoldWoff, ArameBoldWoff2],
}

const blenderProWeights = {
  300: [BlenderProThinWoff, BlenderProThinWoff2],
  400: [BlenderProBookWoff, BlenderProBookWoff2],
  500: [BlenderProMediumWoff, BlenderProMediumWoff2],
  700: [BlenderProBoldWoff, BlenderProBoldWoff2],
  900: [BlenderProHeavyWoff, BlenderProHeavyWoff2],
}

const arame = {
  name: "Arame",
  normal: arameWeights,
}

const blenderPro = {
  name: "BlenderPro",
  normal: blenderProWeights,
}

const createFontFaces = (family, style = "normal") => {
  let styles = ""

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += `
        @font-face {
          font-family: '${family.name}';
          src: url(${woff2}) format('woff2'),
              url(${woff}) format('woff');
          font-weight: ${weight};
          font-style: ${style};
          font-display: auto;
        }
      `
  }

  return styles
}

const arameNormal = createFontFaces(arame)
const blendProNormal = createFontFaces(blenderPro)

const Fonts = css`
  ${arameNormal + blendProNormal}
`

export default Fonts
