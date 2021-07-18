import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import { ProjectsSection } from "../styles/projectsStyles"
import {
  ProjectWrapper,
  ProjectContent,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectStack,
  ProjectLink,
} from "../styles/projectStyles"

// scroll behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

function Projects() {
  const data = useStaticQuery(graphql`
    query MyProjects {
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
    <ProjectsSection
      id="#projects"
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
      <h2>projects I worked on</h2>
      <div>
        {projects.map(project => (
          <ProjectWrapper key={project.id}>
            <ProjectContent className="project__content">
              <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
              <ProjectDescription>
                {project.frontmatter.description}
              </ProjectDescription>
              <ProjectStack className="project__stack">
                {project.frontmatter.stack}
              </ProjectStack>
              <ProjectLink className="project__link">
                {project.frontmatter.link}
              </ProjectLink>
            </ProjectContent>

            <ProjectImage className="project__image-wrapper">
              <GatsbyImage
                image={getImage(
                  project.frontmatter.image.childImageSharp.gatsbyImageData
                )}
                alt="Project image"
                className="project__image"
              />
            </ProjectImage>
          </ProjectWrapper>
        ))}
      </div>
    </ProjectsSection>
  )
}

export default Projects
