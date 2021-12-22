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
  const postTemplate = path.resolve("src/templates/post.js")

  const queryData = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
          next {
            uid
          }
          previous {
            uid
          }
        }
      }
    }
  `)

  const posts = queryData.data.allPrismicPost.edges

  posts.forEach(post => {
    console.log(post.next)
    createPage({
      path: `/blog/${post.node.uid}`,
      component: postTemplate,
      context: {
        uid: post.node.uid,
        next: JSON.parse(JSON.stringify(post.next)),
        prev: JSON.parse(JSON.stringify(post.previous)),
      },
    })
  })

  // const queryData = await graphql(`
  //   {
  //     allPrismicPost {
  //       nodes {
  //         id
  //         uid
  //       }
  //     }
  //   }
  // `)

  // const posts = queryData.data.allPrismicPost.nodes
  // posts.forEach((post, index) => {
  //   createPage({
  //     path: `/blog/${post.uid}`,
  //     component: postTemplate,
  //     context: {
  //       uid: post.uid,
  //     },
  //   })
  // })
}
