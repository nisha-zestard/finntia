/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions
    const result = await graphql(`
      {
        allWordpressPost(sort: {order: DESC, fields: date}) {
          edges {
            node {
              id
              slug
              status
              date
              excerpt
              categories {
                slug
                name
              }
            }
          }
        }
      }
    `)
  
    const { allWordpressPost, allWordpressPage} = result.data
  
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
  
    const postTemplate = path.resolve(`./src/templates/blogpost.js`)
    const BlogPosts = path.resolve(`./src/templates/blog.js`)
    // We want to create a detailed page for each
    // post node. We'll just use the WordPress Slug for the slug.
    // The Post ID is prefixed with 'POST_'
  
  
    // Creating pages for blog posts
  
    allWordpressPost.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.slug}/`,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,          
        },
      })
    })
  
    
    // Pagination for blog posts page
  
    const posts = allWordpressPost.edges
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
        component: slash(BlogPosts),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  
  
  }