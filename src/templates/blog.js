import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";

class BlogList extends Component {
  
    render() {
      const { currentPage, numPages } = this.props.pageContext
      const isFirst = currentPage === 1
      const isLast = currentPage === numPages
      const prevPage = currentPage - 1 === 1 ? "/blog" : `blog/page/${(currentPage - 1).toString()}`
      const nextPage = `blog/page/${(currentPage + 1).toString()}`
      const data = this.props.data
      
      return (
        <Layout>
        <SEO />
        <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h5>01.<span className="line"></span>Blog</h5>
                    <h1>Here's what we're thinking.</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="blog-post">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="blog-list">
                        {data.allWordpressPost.edges.map(({ node }) => (
                            <div className="blog-wrap odd" key={node.id}>
                                <div className="image-content">
                                    <img src={node.featured_media.source_url} alt="" />
                                    <div className="content">
                                        <h5>12.<span className="line"></span>september, 2018</h5>
                                        <h2>{node.title}</h2>
                                        <p>In:Creative, Fresh, New Trends</p>
                                    </div>
                                </div>
                                <div className="bottom-social-icon">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla. At ultrices mi tempus imperdiet nulla malesuada pellentesque
                                        elit eget.</p>
                                    <ul>
                                        <li>
                                            <p>Share this</p>
                                        </li>
                                        <li><a href="# ">Fb.</a></li>
                                        <li><a href="# ">Ln.</a></li>
                                        <li><a href="# ">Tw.</a></li>
                                        <li><a href="# ">Be.</a></li>
                                    </ul>
                                </div>
                            </div>
                            // <div className="blog-wrap even">
                            //     <div className="image-content">
                            //         <img src="assets/images/Listening-and-validation.png" alt="" />
                            //         <div className="content">
                            //             <h2>How to provide good customber services</h2>
                            //             <p> <strong>-johann atkinson CEO</strong> In:Creative, Fresh, New Trends</p>
                            //         </div>
                            //     </div>
                            // </div>
                        ))}
                    	
                   	</div>
                </div>
                <div className="col-md-4">
                    <div className="blog-sidebar">
                        <img src="assets/images/image-right.png" alt="" />
                        <div className="latest-post">
                            <div className="title">
                            	<h5>01.<span className="line"></span>Latest Posts</h5>
                            </div>
                            <ul className="latest-post">
                                <li>
                                    <div className="image"><img src="assets/images/image-right.png" alt="" /></div>
                                    <div className="desc">
                                    	<h3>In quis nisl at risus suscipit aliquam ut molestie leo. Ut a blandit lectus.</h3>
                                    	<p>10/09/2018</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image"><img src="assets/images/image-right.png" alt="" /></div>
                                    <div className="desc">
                                    	<h3>In quis nisl at risus suscipit aliquam ut molestie leo. Ut a blandit lectus.</h3>
                                    	<p>10/09/2018</p>
                                    </div>
                                </li><li>
                                    <div className="image"><img src="assets/images/image-right.png" alt="" /></div>
                                    <div className="desc">
                                    	<h3>In quis nisl at risus suscipit aliquam ut molestie leo. Ut a blandit lectus.</h3>
                                    	<p>10/09/2018</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image"><img src="assets/images/image-right.png" alt="" /></div>
                                    <div className="desc">
                                    	<h3>In quis nisl at risus suscipit aliquam ut molestie leo. Ut a blandit lectus.</h3>
                                    	<p>10/09/2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="post-categorles">
                             <div className="title">
                            	<h5>02.<span className="line"></span>Post Categories</h5>
                            </div>
                            <ul>
                                <li><a href="#">Creative (7)</a></li>
                                <li><a href="#">Fresh (5)</a></li>
                                <li><a href="#">inovative (20)</a></li>
                                <li><a href="#">Fresh (6)</a></li>
                                <li><a href="#">inovative (6)</a></li>
                            </ul>
                        </div>
                        <div className="post-tags">
                            <div className="title">
                            	<h5>03.<span className="line"></span>Post Tags</h5>
                            </div>
                            <ul>
                                <li><a href="#">advance</a></li>
                                <li><a href="#">advance</a></li>
                                <li><a href="#">art</a></li>
                                <li><a href="#">advance</a></li>
                                <li><a href="#">new</a></li>
                                <li><a href="#">advance</a></li>
                                <li><a href="#">advance</a></li>
                                <li><a href="#">advance</a></li>
                            </ul>
                        </div>
                        <div className="our-inta">
                             <div className="title">
                            	<h5>04.<span className="line"></span>Our Instagram</h5>
                            </div>
                            <ul>
                                <li><img src="assets/images/image-right.png" alt="" /></li>
                                <li><img src="assets/images/image-right.png" alt="" /></li>
                                <li><img src="assets/images/image-right.png" alt="" /></li>
                                <li><img src="assets/images/image-right.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="contact-form-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-content">
                        <h5>01.<span className="line"></span>Around the world</h5>
                        <h2>Need a quote? Just ask…</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl at risus suscipit aliquam ut molestie leo. Ut a blandit lectus.</p>
                        <div>
                            <img src="assets/images/h1-img-5.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="form" className="contact-form">
                        <p><input type="text" name="name" size="40" className="full-name" placeholder="Your full name" /></p>
                        <p><input type="email" name="email" value="" size="40" className="email" placeholder="E-mail address" /></p>
                        <p><textarea name="textarea" cols="40" rows="6" className="textarea" placeholder="Drop us a few lines here..."></textarea></p>
                        <button type="submit" className="sub-btn">Send us a message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </Layout>
      )
    }
  
  }
  export default BlogList

  export const pageQuery = graphql`
  query($skip: Int! , $limit: Int!) {
    allWordpressPost(limit: $limit, skip: $skip, sort: {order: DESC, fields: date} ) {
      edges {
        node {
          id
          title
          slug
          date(fromNow: true)
          type
          excerpt
          link
          featured_media {
            source_url
            author {
              name
            }
          }
        }
      }
    }
    allWordpressAcfPosts {
        edges {
          node {
            acf {
              post_author_name
            }
          }
        }
      }
  }
`