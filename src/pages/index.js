import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <Intro />
    <AboutMe />
    <Projects />
  </Layout>
)

export default IndexPage
