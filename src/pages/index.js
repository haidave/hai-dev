import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// components
import Layout from "@components/Layout"
import Seo from "@components/seo"
import Intro from "@components/Intro"
import HomeAbout from "@components/HomeAbout"
import HomeProjects from "@components/HomeProjects"

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
  HashNavigation,
} from "swiper"

// install Swiper modules
SwiperCore.use([EffectFade, Mousewheel, Keyboard, Pagination, HashNavigation])

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
        // onSlideChange={swiperCore => {
        //   const {
        //     activeIndex,
        //     snapIndex,
        //     previousIndex,
        //     realIndex,
        //   } = swiperCore
        //   console.log({ activeIndex, snapIndex, previousIndex, realIndex })
        // }}
        // watchSlidesProgress={true}
        // watchSlidesVisibility={true}
        hashNavigation={true}
      >
        <SwiperSlide data-hash="welcome">
          <Intro />
        </SwiperSlide>
        <SwiperSlide data-hash="about-me">
          <HomeAbout />
        </SwiperSlide>
        <SwiperSlide data-hash="projects">
          <HomeProjects />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Intro />
        </SwiperSlide> */}
      </Swiper>
    </Wrapper>
  </Layout>
)

export default IndexPage
