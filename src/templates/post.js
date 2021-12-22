import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"

const Post = ({ data, pageContext }) => {
  if (!data) return null
  const post = data.prismicPost

  return (
    <Layout>
      <Link to="/blog">Blog</Link>
      <hr />
      <h1>{post.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.data.content.html }} />
      {post.data.categories.slug && (
        <p>CATEGORIES: {post.data.categories.slug}</p>
      )}
      {post.tags.length > 0 ? <p> {post.tags}</p> : <p>No tags</p>}

      <ul>
        <li>
          {pageContext.prev && (
            <Link to={`/blog/${pageContext.prev.uid}`} rel="prev">
              prev
            </Link>
          )}
        </li>
        <li>
          {pageContext.next && (
            <Link to={`/blog/${pageContext.next.uid}`} rel="next">
              next
            </Link>
          )}
        </li>
      </ul>
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
        categories {
          slug
        }
      }
      tags
    }
  }
`

export default Post
