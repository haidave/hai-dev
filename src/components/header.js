import React from "react"
import { Link } from "gatsby"

// styled components
import { HeaderWrapper, HeaderLogo } from "@styles/headerStyles"

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/">H</Link>
      </HeaderLogo>
    </HeaderWrapper>
  )
}

export default Header
