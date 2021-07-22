import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import SectionTitle from "@components/SectionTitle"

// styles
import { Section, SectionContent, StyledLink } from "@styles/GlobalStyle"
import {
  HomeProjectsSection,
  HomeProjectsGrid,
  HomeProjectsGridItem,
  HomeProjectImage,
  HomeProjectLink,
  HomeProjectInfo,
  HomeProjectInfoText,
  HomeProjectsButton,
} from "@styles/HomeProjectsStyles"

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

  return (
    <Section>
      <SectionTitle index={"03"} name={"Projects I worked on"} />
      <SectionContent column>
        <HomeProjectsSection className="swiper-no-swiping">
          <HomeProjectsGrid>
            {projects
              .filter((item, id) => id < 4)
              .map(project => (
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
        </HomeProjectsSection>
        <HomeProjectsButton>
          <StyledLink to="/projects">More projects</StyledLink>
        </HomeProjectsButton>
      </SectionContent>
    </Section>
  )
}

export default HomeProjects
