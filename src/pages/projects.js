import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"

// components
import Layout from "@components/Layout"
import Seo from "@components/seo"
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, Button } from "@styles/GlobalStyle"
import { Wrapper } from "@styles/wrapperStyles"
import {
  HomeProjectsSection,
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
import SwiperCore, { Scrollbar, Mousewheel } from "swiper/core"

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel])

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
          <SwiperSlide>
            <Section>
              <SectionTitle index={"Projects I worked on"} />
              <SectionContent>
                <HomeProjectsSection className="swiper-no-swiping">
                  <HomeProjectsGrid projectPage>
                    {myProjects.map(project => (
                      <HomeProjectsGridItem key={project.id}>
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
                        <HomeProjectLink
                          href={project.frontmatter.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit site
                        </HomeProjectLink>

                        <HomeProjectInfo>
                          <HomeProjectInfoText>
                            {project.frontmatter.description}
                          </HomeProjectInfoText>
                          <HomeProjectInfoText>
                            <span> {project.frontmatter.stack}</span>
                          </HomeProjectInfoText>
                        </HomeProjectInfo>
                      </HomeProjectsGridItem>
                    ))}
                  </HomeProjectsGrid>
                  <Button to="/#projects">Back</Button>
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
