// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryData = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
        }
      }
    }
  `)

  const posts = queryData.data.allPrismicPost.nodes
  const postTemplate = path.resolve("src/templates/post.js")

  posts.forEach((post, index) => {
    const previous = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: `/blog/${post.uid}`,
      component: postTemplate,
      context: {
        uid: post.uid,
        next,
        previous,
      },
    })
  })
}
