import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Tags from '../../components/Tags'
import { softPink } from '../../utils/colors'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/newborn-gaze.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: softPink,
              color: 'white',
              padding: '1rem',
            }}
          >
            Inspirations
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
              <Tags/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
