// Template for single blog post page

import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "./../components/layout"

class PostTemplate extends Component {
  render() {
    const data = this.props.data
    const post = this.props.data.wordpressPost
    // console.log(post.yoast_json_ld[0].wordpress__graph[2].description);
    // const allpostauthor = this.props.data.allWordpressPost
   
    return (
      <Layout>
     
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        date(locale: "")
        content
        author {
          name
          description
          avatar_urls {
            wordpress_24
          }
        }
    }
    allWordpressPost(limit: 3) {
        edges {
            node {
                id
                title
                wordpress_id
                date(formatString: "l")
                slug
                excerpt
                link
                featured_media {
                    source_url
                }
            }
        }
    }
  }
`
