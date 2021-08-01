import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, StyledLink } from "@styles/GlobalStyle"
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
  HomeProjectsButton,
} from "@styles/HomeProjectsStyles"

// import Swiper styles
import "swiper/swiper.min.css"

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core"

// install Swiper modules
SwiperCore.use([Pagination])

const HomeProjects = () => {
  const data = useStaticQuery(graphql`
    query HomeProjects {
      allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
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
  `)

  const projects = data.allMarkdownRemark.nodes

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
    <Section>
      <SectionTitle index={"03"} name={"Projects I worked on"} />
      <SectionContent column>
        <HomeProjectsSection>
          <HomeProjectsCarousel>
            <Swiper pagination={carouselPagination} className="carousel-swiper">
              {projects
                .filter((item, id) => id < 4)
                .map(project => (
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
          <HomeProjectsGrid>
            {projects
              .filter((item, id) => id < 4)
              .map(project => (
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
        </HomeProjectsSection>
        <HomeProjectsButton className="button">
          <StyledLink to="/projects">More projects</StyledLink>
        </HomeProjectsButton>
      </SectionContent>
    </Section>
  )
}

export default HomeProjects
