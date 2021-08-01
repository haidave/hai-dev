import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"

// components
import Layout from "@components/Layout"
import Seo from "@components/seo"
import SectionTitle from "@components/SectionTitle"

// styles
import { Wrapper, Section, SectionContent, Button } from "@styles/GlobalStyle"
import {
  HomeProjectsSection,
  HomeProjectsCarousel,
  HomeProjectsCarouselItem,
  HomeProjectCarouselImage,
  HomeProjectCarouselInfo,
  HomeProjectCarouselInfoText,
  HomeProjectCarouselLink,
  HomeProjectsGrid,
  HomeProjectsGridItem,
  HomeProjectImage,
  HomeProjectLink,
  HomeProjectInfo,
  HomeProjectInfoText,
} from "@styles/HomeProjectsStyles"

// import Swiper styles
import "swiper/swiper.min.css"

// import Swiper core and required modules
import SwiperCore, { Scrollbar, Mousewheel, Pagination } from "swiper/core"

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel, Pagination])

export const query = graphql`
  query PageProjects {
    myProjects: allMarkdownRemark(
      sort: { fields: frontmatter___id, order: ASC }
    ) {
      nodes {
        frontmatter {
          id
          title
          description
          stack
          link
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }
`

const Projects = ({ data }) => {
  const myProjects = data.myProjects.nodes

  const carouselPagination = {
    el: ".carousel-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' carousel-pagination__bullet">' +
        "</span>"
      )
    },
  }

  return (
    <Layout>
      <Seo title="projects" />
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
              <SectionTitle index={"Projects I worked on"} />
              <SectionContent>
                <HomeProjectsSection>
                  <HomeProjectsCarousel page>
                    <Swiper
                      pagination={carouselPagination}
                      className="carousel-swiper"
                    >
                      {myProjects.map(project => (
                        <SwiperSlide key={project.id}>
                          <HomeProjectsCarouselItem className="project__item">
                            <HomeProjectCarouselImage>
                              <GatsbyImage
                                image={getImage(
                                  project.frontmatter.image.childImageSharp
                                    .gatsbyImageData
                                )}
                                alt={project.frontmatter.title}
                                className="project__image"
                              />
                            </HomeProjectCarouselImage>
                            <HomeProjectCarouselLink
                              href={project.frontmatter.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit site
                            </HomeProjectCarouselLink>
                            <HomeProjectCarouselInfo>
                              <HomeProjectCarouselInfoText>
                                {project.frontmatter.description}
                              </HomeProjectCarouselInfoText>
                              <HomeProjectCarouselInfoText>
                                <span> {project.frontmatter.stack}</span>
                              </HomeProjectCarouselInfoText>
                            </HomeProjectCarouselInfo>
                          </HomeProjectsCarouselItem>
                        </SwiperSlide>
                      ))}
                      <div className="carousel-pagination"></div>
                    </Swiper>
                  </HomeProjectsCarousel>
                  <HomeProjectsGrid projectPage>
                    {myProjects.map(project => (
                      <HomeProjectsGridItem
                        key={project.id}
                        className="project__item"
                      >
                        <HomeProjectImage>
                          <GatsbyImage
                            image={getImage(
                              project.frontmatter.image.childImageSharp
                                .gatsbyImageData
                            )}
                            alt={project.frontmatter.title}
                            className="project__image"
                          />
                        </HomeProjectImage>
                        {project.frontmatter.link && (
                          <HomeProjectLink
                            href={project.frontmatter.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            page
                          >
                            Visit site
                          </HomeProjectLink>
                        )}
                        <HomeProjectInfo page>
                          <HomeProjectInfoText page>
                            {project.frontmatter.description}
                          </HomeProjectInfoText>
                          <HomeProjectInfoText page>
                            <span> {project.frontmatter.stack}</span>
                          </HomeProjectInfoText>
                        </HomeProjectInfo>
                      </HomeProjectsGridItem>
                    ))}
                  </HomeProjectsGrid>
                  <div className="button">
                    <Button href="/#projects">Back</Button>
                  </div>
                </HomeProjectsSection>
              </SectionContent>
            </Section>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </Layout>
  )
}

export default Projects
