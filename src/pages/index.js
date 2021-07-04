import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <Intro />
  </Layout>
)

export default IndexPage
