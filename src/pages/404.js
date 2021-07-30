import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/seo"

// styles
import { Wrapper } from "@styles/GlobalStyle"

const ErrorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--color-white);

  h1 {
    font-size: clamp(1rem, 6vw, 5rem);
  }

  p {
    margin-top: 2vh;
    font-family: var(--font-blender-pro);
    font-size: clamp(0.875rem, 2vw, 5rem);
  }
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Wrapper>
      <ErrorSection>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </ErrorSection>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
