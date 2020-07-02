/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"

const render = (data, children) => {
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => render(data, children)}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
