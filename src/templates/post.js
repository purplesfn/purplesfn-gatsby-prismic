import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"

const Post = ({ data }) => {
  if (!data) return null
  const post = data.prismicPost

  return (
    <Layout>
      <Link to="/blog">Blog</Link>
      <hr />
      <h1>{post.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.data.content.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostByUid($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`

export default Post
