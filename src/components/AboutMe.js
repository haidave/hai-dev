import React, { useEffect } from "react"

// styles
import { AboutMeSection, AboutMeText } from "../styles/aboutMeStyles"
import { Flex, Container } from "../styles/globalStyles"

// scroll behaviour

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

function AboutMe() {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  return (
    <AboutMeSection
      id="#about-me"
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Flex directionColumn centered>
          <h2>about me</h2>
          <AboutMeText>
            yo, my name is Hai Nguyen <small>(or just Dave)</small> and I'm
            supposed to be a frontend developer. based in Prague. right now I'm
            looking for a job so you better hire me! just kidding. keep
            scrolling please. thanks.
          </AboutMeText>
        </Flex>
      </Container>
    </AboutMeSection>
  )
}

export default AboutMe
