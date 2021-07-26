import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// components
import Layout from "@components/Layout"
import Seo from "@components/seo"
import SectionTitle from "@components/SectionTitle"

// styles
import {
  Wrapper,
  Section,
  SectionContent,
  StyledLink,
} from "@styles/GlobalStyle"
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
          <SwiperSlide style={{ overflowY: "scroll" }}>
            <Section scrollable>
              <SectionTitle index={"About me"} />
              <SectionContent>
                <AboutMeSection className="swiper-no-swiping">
                  <AboutMeText>
                    Hey, my name is Hai Nguyen, but you can call me{" "}
                    <strong>Dave</strong>. I'm 25 years old and I&nbsp;live in
                    Prague.
                  </AboutMeText>
                  <AboutMeText>
                    My web development journey started back in 2018 when
                    I&nbsp;bought my first Udemy course to learn some{" "}
                    <strong>HTML/CSS</strong> and after that I got{" "}
                    an&nbsp;internship at <strong>Isobar Czech Republic</strong>
                    , a&nbsp;digital agency where I&nbsp;still work.
                  </AboutMeText>
                  <AboutMeText>
                    After almost 3 years at Isobar I learned countless things -
                    from centering a&nbsp;button to being a&nbsp;leader of
                    a&nbsp;smaller team. I'm currently{" "}
                    <strong>in&nbsp;charge of campaign assets</strong> such as{" "}
                    <a
                      href="https://mam.cz/zpravy/2021-05/metrozoom-vytvoril-pro-sazkabet-prvni-dynamickou-ooh-reklamu-v-cesku/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dynamic banners
                    </a>{" "}
                    or newsletters, built websites in <strong>Vue/Nuxt</strong>{" "}
                    and maintained legacy websites in&nbsp;Laravel. My clients
                    list includes ŠKODA Auto, Sazka, Heineken, Sunar, Generali
                    and other brands.
                  </AboutMeText>
                  <AboutMeText>
                    But it's time for me to find a&nbsp;new challenge, so
                    I&nbsp;created this portfolio to{" "}
                    <strong>look for a&nbsp;new job opportunity</strong>.
                    In&nbsp;the evenings after work, I&nbsp;have been learning{" "}
                    <strong>React</strong> and I&nbsp;would like to continue in
                    this direction. I&nbsp;want to be able to build superb
                    websites using the latest technology.
                  </AboutMeText>

                  <AboutMeText>
                    My hobbies are football, badminton, wearing black, new
                    technologies and of course coding.
                  </AboutMeText>

                  <AboutMeText>
                    Here are a&nbsp;few technologies and tools I've been working
                    with recently:
                    <AboutMeStack>
                      <li>React, Gatsby, Next*</li>
                      <li>Vue, Nuxt</li>
                      <li>BEM, SCSS, Styled&nbsp;Components</li>
                      <li>GSAP, Framer&nbsp;Motion</li>
                      <li>Netlify, Bitbucket, Github</li>
                      <li>Photoshop, Sketch, Figma</li>
                      <p>*still learning</p>
                    </AboutMeStack>
                  </AboutMeText>

                  <AboutMeText>
                    Oh and I can also speak Czech, English and Vietnamese.
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
