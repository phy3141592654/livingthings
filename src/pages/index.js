import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h2></h2>
    <div style={{background: '#00ff44'}}>
    <SEO title="Home" />
    <Image />
    <p>Protect the plants and animals in this world.</p>
    <p>Every organism right from the microscopic fungi to macroscopic whales are necessary for sustaining the environment.</p>
    <p>Support Us. <Link to="/donate/">Donate</Link> <br /></p>
    </div>
  </Layout>
)

export default IndexPage
