import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// components
import Layout from "@components/Layout"
import Seo from "@components/seo"
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, StyledLink } from "@styles/GlobalStyle"
import { Wrapper } from "@styles/wrapperStyles"
import {
  AboutMeSection,
  AboutMeText,
  AboutMeStack,
} from "@styles/aboutMeStyles"

// import Swiper styles
import "swiper/swiper.min.css"

// import Swiper core and required modules
import SwiperCore, { Scrollbar, Mousewheel } from "swiper/core"

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel])

const About = () => {
  return (
    <Layout>
      <Seo title="about" />
      <Wrapper>
        <Swiper
          direction={"vertical"}
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Section>
              <SectionTitle index={"About me"} />
              <SectionContent>
                <AboutMeSection className="swiper-no-swiping">
                  <AboutMeText>
                    Hey, my name is Hai Nguyen but you can call me{" "}
                    <strong>Dave</strong>. I'm 25 years old and I live in
                    Prague.
                  </AboutMeText>
                  <AboutMeText>
                    My web development journey started back in 2018 when I
                    bought my first Udemy course to learn some{" "}
                    <strong>HTML/CSS</strong> and after that I got{" "}
                    <strong>an internship</strong> at a digital agency Isobar
                    Czech Republic, where I still work.
                  </AboutMeText>
                  <AboutMeText>
                    In almost 3 years at Isobar I learned countless things. From
                    centering the button to managing a smaller team. I'm
                    currently <strong>in charge of campaign assets</strong> such
                    as dynamic banners and newsletters. I also build websites in{" "}
                    <strong>Vue/Nuxt</strong> and maintenance legacy websites in
                    Laravel. Clients include ŠKODA Auto, Sazka, Heineken, Sunar,
                    Generali and other brands.
                  </AboutMeText>
                  <AboutMeText>
                    But I feel it's <strong>time for a new challenge</strong>,
                    so I created this portfolio to{" "}
                    <strong>find a new job</strong>. In the evenings after work
                    I have been <strong>learning React</strong> and I would like
                    to continue in this direction. I want to build superb
                    websites using the newest technology.
                  </AboutMeText>

                  <AboutMeText>
                    My hobbies are football, badminton, minimalism, new
                    technologies and of course coding.
                  </AboutMeText>

                  <AboutMeText>
                    Here are a few technologies and tools I've been working with
                    recently:
                    <AboutMeStack>
                      <li>React, Gatsby, Next*</li>
                      <li>Vue, Nuxt</li>
                      <li>BEM, SCSS, Styled&nbsp;Components</li>
                      <li>GSAP, Framer&nbsp;Motion</li>
                      <li>Git, Bitbucket, Github</li>
                      <li>Photoshop, Sketch, Figma</li>
                      <p>*still learning</p>
                    </AboutMeStack>
                  </AboutMeText>

                  <AboutMeText>
                    Yeah and I can speak Czech, English and Vietnamese.
                  </AboutMeText>

                  <StyledLink to="/#about-me">Back</StyledLink>
                </AboutMeSection>
              </SectionContent>
            </Section>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </Layout>
  )
}

export default About
