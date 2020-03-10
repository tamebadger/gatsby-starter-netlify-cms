import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, StaticQuery, navigate } from 'gatsby'
import ButtonContainer from './ButtonContainer'
import { Button } from "storybook-pa"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <ButtonContainer>
              {group.map(tag => (
                  <Button key={tag.fieldValue} buttonTitle={tag.fieldValue} onClick={() => {
                    navigate(`/tags/${kebabCase(tag.fieldValue)}/`);
                  }} />
              ))}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </section>
)

export default () => (
    <StaticQuery
      query={graphql`
      query TagsCompQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
      render={(data, count) => <TagsPage data={data} count={count} />}
    />
  )
  