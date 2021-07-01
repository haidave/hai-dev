// fonts
import "@fontsource/league-spartan/700.css"
import "@fontsource/libre-baskerville"

import React from "react"

import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
