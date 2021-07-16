import * as React from "react"
import PropTypes from "prop-types"

// styles
import GlobalStyle from "@styles/GlobalStyle"

// components
import Header from "@components/Header"
import Footer from "@components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
