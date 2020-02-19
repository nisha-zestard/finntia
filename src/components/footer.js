import React from 'react'
import { useStaticQuery, Link } from "gatsby";


const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            allWordpressAcfOptions {
                nodes {
                  options {
                    footer_heading
                    footer_logo {
                      source_url
                    }
                    footer_social_icon_links {
                        footer_social_icon_link
                        footer_social_icon_title
                    }
                    footer_copy_right_text
                  }
                }
              }
        }
    `)
    const footerLast = data.allWordpressAcfOptions.nodes[0].options;
    const facebook = footerLast.footer_social_icon_links[0];
    const linkedin = footerLast.footer_social_icon_links[1];
    const twitter = footerLast.footer_social_icon_links[2];
    const be = footerLast.footer_social_icon_links[3];
    //console.log(linkedin);
    return (
    <footer>
        <div className="footer-main ">
        <div className="footer-top ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-2 ">
                        <a href="http://finntia.phptasks.com/" className="footer-logo "><img src={footerLast.footer_logo.source_url} alt="footer-logo "/></a>
                    </div>
                    <div className="col-md-10 ">
                        <h2>{footerLast.footer_heading}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-middle ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-9 ">
                        <ul className="footer-menu ">
                            <li><a href="# ">About Us</a></li>
                            <li><a href="# ">Services</a></li>
                            <li><a href="# ">Technology</a></li>
                            <li><a href="# ">Work</a></li>
                            <li><a href="# ">Blog</a></li>
                            <li><a href="# ">Get In Touch</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 ">
                        <ul className="social-icon ">
                            <li><a href={facebook.footer_social_icon_link}>{facebook.footer_social_icon_title}</a></li>
                            <li><a href={linkedin.footer_social_icon_link}>{linkedin.footer_social_icon_title}</a></li>
                            <li><a href={twitter.footer_social_icon_link}>{twitter.footer_social_icon_title}</a></li>
                            <li><a href={be.footer_social_icon_link}>{be.footer_social_icon_title}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="copy-right " dangerouslySetInnerHTML = {{__html:footerLast.footer_copy_right_text}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
    )
}
export default Footer
