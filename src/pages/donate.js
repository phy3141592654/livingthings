import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const donate = () => {
  setTimeout(() => {alert("Success")}, 1);
};

const SecondPage = () => (
  <Layout>
    <SEO title="Donate" />
    <h1>Donate</h1>
    <p>Make a difference in this world. We have contributed to hundreds of WildLife sanctuaries and National parks across the globe.</p>
    <button onClick={donate}>Click here</button><br /><br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
