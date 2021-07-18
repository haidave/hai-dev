import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// components
import Layout from "@components/Layout"
import Seo from "@components/seo"
import Intro from "@components/Intro"
import AboutMe from "@components/AboutMe"
import Projects from "@components/Projects"

// styles
import { Wrapper } from "@styles/wrapperStyles"

// import Swiper styles
import "swiper/swiper.min.css"
import "@styles/custom-swiper.scss"

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Mousewheel,
  Keyboard,
  Pagination,
} from "swiper"

// install Swiper modules
SwiperCore.use([EffectFade, Mousewheel, Keyboard, Pagination])

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<div class="${className}"><span>0${index + 1}</span></div>`
  },
}

const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <Wrapper>
      <Swiper
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={50}
        speed={500}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        pagination={pagination}
        breakpoints={{
          1024: {
            shortSwipes: false,
          },
        }}
        onSlideChange={swiperCore => {
          const {
            activeIndex,
            snapIndex,
            previousIndex,
            realIndex,
          } = swiperCore
          console.log({ activeIndex, snapIndex, previousIndex, realIndex })
        }}
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
      >
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  </Layout>
)

export default IndexPage
