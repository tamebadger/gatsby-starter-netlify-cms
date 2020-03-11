import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ContentLayout from '../components/ContentLayout'

const inspireData = [
  {
    title: "ABC of Emotional Development",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1504484440176-4f89a392c862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Significance of Breastfeeding",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1499638892001-25bdfe0bba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Developmental Milestones",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1559806794-3815a1436278?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "The currency of Love Is Time",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1504489969124-eb0e46a5f482?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Preparing The Uterus For Pregnancy",
    tag: "Inspiration",
    src:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Dynamic Relationships As The Newborn",
    tag: "Inspiration",
    src:
      "https://images.unsplash.com/photo-1527712337080-da9f28bb177a?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Ideal Environment For The Newborn",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1504486739753-9694b535f54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Teaching Your Child Impulse Control",
    tag: "Inspiration",
    src: "https://images.unsplash.com/photo-1495131292899-bc096577e8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  }
];

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                {/* <Features gridItems={intro.blurbs} /> */}
                <ContentLayout data={inspireData} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/courses">
                      See all courses
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest inspiration
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/inspiration">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
