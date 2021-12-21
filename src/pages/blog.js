import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <h1>Blog page</h1>
    {data.allPrismicPost.edges.map(post => {
      return (
        <div key={post.node.uid}>
          <h3>{post.node.data.title.text}</h3>
          <Link to={`${post.node.uid}`}>Open</Link>
          <br />
          <hr></hr>
        </div>
      )
    })}
    <p>
      <Link to="/">Go to Home</Link> <br />
    </p>
  </Layout>
)

export const pageQuery = graphql`
  query PostsQuery {
    allPrismicPost {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            content {
              text
            }
            categories {
              slug
            }
          }
          tags
        }
      }
    }
  }
`
export default BlogPage
