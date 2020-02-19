//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, Link } from "gatsby";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { removePre } from './../util/common';

const Header = () => {
    const data = useStaticQuery(graphql`
    {
        allWordpressMenusMenusItems {
            nodes {
                name
                items {
                title
                url
                }
            }
        }
        allWordpressAcfOptions {
            nodes {
              options {        
                header_logo {
                  source_url
                }
                header_light_logo {
                  source_url
                }
                header_right_link
                header_right_link_text
              }
            }
          }
      
    }
  `)
  
  const headdata = data.allWordpressAcfOptions.nodes[0].options;
  const aboutus = data.allWordpressMenusMenusItems.nodes[0].items[0];
  const services = data.allWordpressMenusMenusItems.nodes[0].items[1];
  const technology = data.allWordpressMenusMenusItems.nodes[0].items[2];
  const work = data.allWordpressMenusMenusItems.nodes[0].items[3];
  const blog = data.allWordpressMenusMenusItems.nodes[0].items[4];
  const getintouch = data.allWordpressMenusMenusItems.nodes[0].items[5];

  return(
  <header>
    <div className="header-main">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <a class="dark-logo" href="#"><img src={headdata.header_logo.source_url} alt="logo" /></a>
                    <a class="light-logo" href="#"><img src={headdata.header_light_logo.source_url} alt="logo" /></a>
                </div>
                <div className="col-md-8  pr-md-0">
                    <div className="get-in-touch ">
                        <a href="#">{headdata.header_right_link_text}</a>
                    </div>
                </div>
                <div className="col-md-1 ">
                    <div className="menu-block text-center ">
                        <Navbar className="menu-nav">
                            <Nav.Link href={`/${removePre(aboutus.url)}`} className="menu-nav__link">{aboutus.title}</Nav.Link> 
                            <Nav.Link href={`/${removePre(services.url)}`} className="menu-nav__link">{services.title}</Nav.Link>
                            <Nav.Link href={`/${removePre(technology.url)}`} className="menu-nav__link">{technology.title}</Nav.Link>
                            <Nav.Link href={`/${removePre(work.url)}`} className="menu-nav__link">{work.title}</Nav.Link>
                            <Nav.Link href={`/${removePre(blog.url)}`} className="menu-nav__link">{blog.title}</Nav.Link>
                            <Nav.Link href={`/${removePre(getintouch.url)}`} className="menu-nav__link">{getintouch.title}</Nav.Link>                            
                        </Navbar>
                       
                        <a href="# " className="menu-btn ">
                            <strong>menu</strong>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
