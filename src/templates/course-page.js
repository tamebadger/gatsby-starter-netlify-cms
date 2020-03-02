import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import ContentLayout from '../components/ContentLayout'
import { softPink } from '../utils/colors'
import { Button, ContentBox } from "storybook-pa"
import ButtonContainer from '../components/ButtonContainer'


const courseDataSetOne = [
  {
    title: "Language Development For 3 to 6 year olds",
    tag: "10 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1507077630565-b23bbbe732ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Teaching Your Child Impulse Control",
    tag: "7 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1502338425440-7bf57557e2ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Teaching Boundaries In 10 Steps",
    tag: "10 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1509676468933-c98e51205cef?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "21 Developmental Milestones",
    tag: "21 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1505692069463-edfaea445fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=550&h=290&q=60"
  }
]

const courseDataSetTwo = [
  
  {
    title: "ABC of Emotional Development",
    tag: "21 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1557172955-5c0491a20970?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Potty Training Made Easy",
    tag: "10 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1507098092992-fc64b4ac7072?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Manifest Good Habits Every Day",
    tag: "21 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1471199336425-8966ccc0a907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=550&h=290&q=60"
  },
  {
    title: "Teaching Your Child Impulse Control",
    tag: "7 DAY COURSE",
    src:
      "https://images.unsplash.com/photo-1502338425440-7bf57557e2ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=550&h=290&q=60"
  }
];

export const CoursePageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          backgroundColor: softPink,
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">

        <div className="section">
          
        <div className="columns">
          <div className="column">
            <ButtonContainer>
              <Button buttonTitle={'My Courses'} />
              <Button buttonTitle={'New Courses'} />
              <Button buttonTitle={'Top 40 Courses'} />
              <Button buttonTitle={'Browse By Title'} />
              <Button buttonTitle={'Browse By Author'} />
            </ButtonContainer>
          </div>
        </div>

        <div className="columns">
          <div className="column">
          <ContentLayout data={courseDataSetOne} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <ButtonContainer>
              <Button buttonTitle={'Toddlers'} />
              <Button buttonTitle={'Babies'} />
              <Button buttonTitle={"Terrible Two's"} />
              <Button buttonTitle={'Relationships'} />
              <Button buttonTitle={'Schooling'} />
              <Button buttonTitle={'Lorem'} />
              <Button buttonTitle={'Ipsum'} />
              <Button buttonTitle={'Dolor'} />
              <Button buttonTitle={'Isa'} />
              <Button buttonTitle={'Met'} />
            </ButtonContainer>
          </div>
        </div>

        <div className="columns">
          <div className="column">
          <ContentLayout data={courseDataSetTwo} />
          </div>
        </div>

          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {/* <Features gridItems={intro.blurbs} /> */}
              {/* <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div> */}
              {/* <Testimonials testimonials={testimonials} /> */}
              
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

CoursePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const CoursePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CoursePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

CoursePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CoursePage

export const coursePageQuery = graphql`
  query CoursePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
